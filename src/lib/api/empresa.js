export async function getEmpresas() {
  let result = await fetch("http://localhost:8080/apimc/empresa", {
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
  let result = await fetch(`http://localhost:8080/apimc/empresa/${id}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }
  )
  let message = await result.json()
  if(result === 404) {
    return { status: false, message: Object.values(message)[0] };
  }
  else {
    return { status: true, empresa: message }
  }
}

export async function getEmpresaByEmail(email) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/empresa/email/${email}`, {
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
    let result = await fetch("http://localhost:8080/apimc/empresa", {
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
  try {
    let result = await fetch(`http://localhost:8080/apimc/empresa/${id}`, {
      method: "PUT",
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
    return { status: true, message: `Empresa atualizada` }
  } catch(error) {
    console.log(error)
    return { status: false, message: `Erro inesperado: ${error}` }
  }
  
}

export async function login(email, senha) {
  try {
    let result = await fetch("http://localhost:8080/apimc/empresa/login", {
      method: "POST", 
      body: JSON.stringify({email, senha}),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    })
    if(result.status !== 200) {
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