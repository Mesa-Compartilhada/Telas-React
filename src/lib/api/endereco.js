export async function addEndereco(endereco) {
  let result = await fetch("http://localhost:8080/apimc/endereco", {
    method: "POST",
    body: JSON.stringify(endereco),
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  });
  result = await result.json()
  return result
}