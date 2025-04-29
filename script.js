function verificarCobranca() {
  const dataVencimento = new Date(document.getElementById('dataVencimento').value);
  const dataHoje = new Date(document.getElementById('dataHoje').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(dataVencimento) || isNaN(dataHoje)) {
      resultado.innerHTML = "Por favor, preencha as duas datas!";
      resultado.style.color = "red";
      return;
  }

  const umDia = 24 * 60 * 60 * 1000;
  const diasAtraso = Math.floor((dataHoje - dataVencimento) / umDia);

  if (diasAtraso < 0) {
      resultado.innerHTML = `⏳ Ainda faltam ${Math.abs(diasAtraso)} dia(s) para o vencimento.`;
  } else if (diasAtraso === 0) {
      resultado.innerHTML = "📢 Hoje é o dia do vencimento!";
  } else if (diasAtraso <= 5) {
      resultado.innerHTML = `⚠️ Boleto em atraso (${diasAtraso} dia(s)). Dentro da carência de 5 dias (multa de apenas 2%).`;
  } else {
      resultado.innerHTML = `🚨 Boleto vencido há ${diasAtraso} dias. Multa e cobrança já aplicadas!`;
  }
}

