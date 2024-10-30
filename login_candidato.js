function loginCandidato() {
  const idInscricao = document.getElementById("idInscricao").value;

  fetch(`https://seubancodedados.restdb.io/rest/inscricoes/${idInscricao}`, {
    method: "GET",
    headers: {
      "x-apikey": "SEU_API_KEY"
    }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "portal_candidato.html";
    } else {
      alert("ID de inscrição inválido.");
    }
  })
  .catch(error => console.error("Erro ao fazer login:", error));
}
