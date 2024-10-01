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