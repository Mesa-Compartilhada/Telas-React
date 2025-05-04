export async function addEndereco(endereco) {
  try {
    let result = await fetch(`${process.env.REACT_APP_MESACOMPARTILHADA_API_URI}/endereco`, {
      method: "POST",
      body: JSON.stringify(endereco),
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    });
    if(result.status === 400) {
      console.log(result)
      return false
    }
    result = await result.json()
    return result
  } catch(error) {
    console.log(`Error: ${error}`)
    return false
  }
}