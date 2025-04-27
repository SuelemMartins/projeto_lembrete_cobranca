function verificarStatus() {
  const dataVencimento = new Date(
    document.getElementById("dataVencimento").value
  );
  const dataHoje = new Date(document.getElementById("dataHoje").value);

  if (
    !dataVencimento ||
    !dataHoje ||
    isNaN(dataVencimento) ||
    isNaN(dataHoje)
  ) {
    document.getElementById("resultado").innerText =
      "Por favor, preencha as duas datas.";
    return;
  }

  const diffEmDias = Math.floor(
    (dataHoje - dataVencimento) / (1000 * 60 * 60 * 24)
  );

  let mensagem = "";

  if (diffEmDias < 0) {
    mensagem = "Enviar lembrete de vencimento.";
  } else if (diffEmDias === 0) {
    mensagem = "Hoje é o dia do vencimento! Reforçar lembrete.";
  } else if (diffEmDias <= 5) {
    mensagem = "Envio de lembrete de carência. Pode pagar com multa de 2%.";
  } else {
    mensagem = "Iniciar processo de cobrança.";
  }

  document.getElementById("resultado").innerText = mensagem;
}
