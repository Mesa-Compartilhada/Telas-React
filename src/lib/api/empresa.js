export async function getEmpresas() {
  let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }
  )
  result = await result.json()
  return result
}

export async function getEmpresaById(id) {
  let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/${id}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }
  )
  let message = await result.json()
  if(!result.ok) {
    return { status: false, message: Object.values(message)[0] };
  }
  else {
    return { status: true, empresa: message }
  }
}

export async function getEmpresaByEmail(email) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/email/${email}`, {
      method: "GET"
      }
    )
    if(result.status === 404) {
      return false
    }
    else {
      result = await result.json()
      return result
    }
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function addEmpresa(empresa) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/register`, {
      method: "POST",
      body: JSON.stringify(empresa),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });
    let message = await result.json()
    if(result.status == 400) {
      return { status: false, message: Object.values(message)[0] }
    }
    return { status: true, message: `Empresa adicionada` }
  } catch(error) {
    console.log(error)
    return { status: false, message: `Erro inesperado: ${error}` }
  }
  
}

export async function updateEmpresaById(id, empresa) {
  const token = localStorage.getItem("jwt")
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/${id}`, {
      method: "PUT",
      body: JSON.stringify(empresa),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    });
    let message = await result.json()
    if(result.status == 400) {
      return { status: false, message: Object.values(message)[0] }
    }
    return { status: true, message: `Empresa atualizada` }
  } catch(error) {
    console.log(error)
    return { status: false, message: `Erro inesperado: ${error}` }
  }
  
}

export async function login(email, senha) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/login`, {
      method: "POST", 
      body: JSON.stringify({email, senha}),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    const json = await result.json()
    let loginResult = { status: result.status === 200, token: null, message: null, user: null }
    if(result.status !== 200) {
      loginResult.message = "Credenciais inválidas"
    }
    else {
      loginResult.token = json.token
    }
    return loginResult
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getMe() {
  const token = localStorage.getItem("jwt")
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/me`, {
      method: "GET", 
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    })
    const json = await result.json()
    const userResult = { status: result.status, message: null, user: null }
    if(result.status !== 200) {
      userResult.message = "Usuário não encontrado"
    }
    else {
      userResult.user = json.user
    }
    return userResult
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getPasswordToken(email) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/token/${email}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    let message = await result.json()
    if(result.status !== 200) {
      return { status: false, message: Object.values(message)[0] }
    }
    else {
      return { status: true, message: Object.values(message)[0] }
    }
  } catch(error) {
    console.log(error)
    return { status: true, message: `Erro inesperado ${error}` }
  }
}

export async function verificarToken(token) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/token/${token}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
    let message = await result.json()
    if(result.status !== 200) {
      return { status: false, message: Object.values(message)[0] }
    }
    else {
      return { status: true, message: Object.values(message)[0] }
    }
  } catch(error) {
    console.log(error)
    return { status: true, message: `Erro inesperado ${error}` }
  }
}

export async function recuperarSenha(token, senha) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/empresa/recuperar-senha`, {
      method: "POST",
      body: JSON.stringify({token, senha}),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    let message = await result.json()
    if(result.status !== 200) {
      return { status: false, message: Object.values(message)[0] }
    }
    else {
      return { status: true, message: Object.values(message)[0] }
    }
  } catch(error) {
    console.log(error)
    return { status: true, message: `Erro inesperado ${error}` }
  }
}