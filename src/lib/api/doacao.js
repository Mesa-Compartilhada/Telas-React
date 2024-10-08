export async function getDoacoes() {
  try {
    let result = await fetch("http://localhost:8080/apimc/doacao", {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}
  
export async function getDoacaoById(id) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/doacao/${id}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesByEmpresaDoadoraId(id) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/doacao/empresa-doadora/${id}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesByEmpresaRecebedoraId(id) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/doacao/empresa-recebedora/${id}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesByStatus(status) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/doacao/status/${status}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function addDoacao(doacao) {
  try {
    let result = await fetch("http://localhost:8080/apimc/doacao", {
      method: "POST",
      body: JSON.stringify(doacao),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function updateStatusDoacao(status, doacaoId, empresaRecebedoraId) {
  try {
    let result = await fetch(`http://localhost:8080/apimc/doacao/status/${doacaoId}`, {
      method: "PUT",
      body: JSON.stringify({ status, empresaRecebedoraId }),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });
    const message = await result.json()
    if(result === "400") {
      console.log(Object.values(message)[0])
      return { status: false, message: Object.values(message)[0] }
    }
    console.log(message)
    return { status: true, message: message }
  } catch(error) {
    console.log(error)
    return false
  }
}