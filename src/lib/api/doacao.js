export async function getDoacoes() {
    let result = await fetch("http://localhost:8080/apimc/doacao", {
        method: "GET"
      }
    )
    result = await result.json()
    return result
  }
  
  export async function getDoacaoById(id) {
    let result = await fetch(`http://localhost:8080/apimc/doacao/${id}`, {
        method: "GET"
      }
    )
    result = await result.json()
    return result
  }
  
  export async function getDoacaoByNome(nome) {
    try {
      let result = await fetch(`http://localhost:8080/apimc/doacao/nome/${nome}`, {
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
    } catch(error) {
      console.log(error)
      return false
    }
    
  }