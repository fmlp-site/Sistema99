function enviarInscricao() {
  const formData = new FormData();
  
  formData.append("nomeCompleto", document.getElementById("nomeCompleto").value);
  formData.append("dataNascimento", document.getElementById("dataNascimento").value);
  formData.append("curso", document.getElementById("curso").value);
  formData.append("modalidadeConcorrencia", document.getElementById("modalidadeConcorrencia").value);
  formData.append("nomePai", document.getElementById("nomePai").value);
  formData.append("nomeMae", document.getElementById("nomeMae").value);
  formData.append("nomeIrmaos", document.getElementById("nomeIrmaos").value);
  formData.append("nomeEscola", document.getElementById("nomeEscola").value);
  formData.append("cpf", document.getElementById("cpf").value);
  formData.append("foto3x4", document.getElementById("foto3x4").files[0]);
  formData.append("historicoEscolar", document.getElementById("historicoEscolar").files[0]);

  fetch("https://seubancodedados.restdb.io/rest/inscricoes", {
    method: "POST",
    headers: {
      "x-apikey": "SEU_API_KEY"
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert("Inscrição enviada com sucesso! ID de Inscrição: " + data._id);
  })
  .catch(error => console.error("Erro ao enviar inscrição:", error));
         }
