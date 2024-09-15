export async function getEmpresas() {
  let result = await fetch("http://localhost:8080/apimc/empresa", {
      method: "GET"
    }
  )
  result = await result.json()
  return result
}

export async function getEmpresaById(id) {
  let result = await fetch(`http://localhost:8080/apimc/empresa/${id}`, {
      method: "GET"
    }
  )
  result = await result.json()
  return result
}

export async function addEmpresa(empresa) {
  let result = await fetch("http://localhost:8080/apimc/empresa", {
    method: "POST",
    body: JSON.stringify(empresa),
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  });
  result = await result.json()
  return result
}