import { getEmpresaById } from "./empresa"

export async function getDoacoes() {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao`, {
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
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/${id}`, {
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
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/empresa-doadora/${id}`, {
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
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/empresa-recebedora/${id}`, {
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
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/status/${status}`, {
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
  const token = localStorage.getItem("jwt")
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao`, {
      method: "POST",
      body: JSON.stringify(doacao),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    });
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function updateStatusDoacao(status, doacaoId, empresaSolicitanteId, empresaRecebedoraId = null ) {
  const token = localStorage.getItem("jwt")
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/status/${doacaoId}`, {
      method: "PUT",
      body: JSON.stringify({ status, empresaRecebedoraId, empresaSolicitanteId }),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
    });
    const message = await result.json()
    if(result.status === 400) {
      return { status: false, message: Object.values(message)[0] }
    }
    return { status: true, message: message }
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesEmpresa(id) {
  const result = await getEmpresaById(id)
  return result.empresa.doacoes
}

export async function getDoacoesByStatusAndEmpresaDoadoraId(status, id) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/status/${status}/empresa-doadora/${id}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesByStatusAndEmpresaRecebedoraId(status, id) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/status/${status}/empresa-recebedora/${id}`, {
      method: "GET"
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}

export async function getDoacoesByFilter(filtros) {
  const token = localStorage.getItem("jwt")
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/doacao/filtro`, {
      method: "POST",
      body: JSON.stringify(filtros),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      }
    })
    result = await result.json()
    return result
  } catch(error) {
    console.log(error)
    return false
  }
}