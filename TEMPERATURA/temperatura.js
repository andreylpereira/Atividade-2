function converterTemperatura(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("retornarCelsius").innerHTML=(valNum-32)/1.8;
}