var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
document.getElementById("reset").disabled = true;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  if (tentativas != 0) {
    if (chute == numeroSecreto) {
      tentativas = 0;
      elementoResultado.innerHTML = "Acertou!";
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Digite um número<br>de 0 a 10.";
    } else {
      tentativas -= 1;
      if (tentativas == 0) {
        elementoResultado.innerHTML =
          "Errou!<br>O número era " + numeroSecreto + ".";
      } else {
        elementoResultado.innerHTML =
          "Errou!<br>" + tentativas + " tentativa(s) restante(s).<br>";
        if (chute > numeroSecreto) {
          elementoResultado.innerHTML += " O número secreto é menor.";
        } else {
          elementoResultado.innerHTML += " O número secreto é maior.";
        }
      }
    }
  }
  if (tentativas == 0) {
    document.getElementById("valor").disabled = true;
    document.getElementById("chutar").disabled = true;
    document.getElementById("reset").disabled = false;
  }
}

function Reset() {
  document.getElementById("valor").disabled = false;
  document.getElementById("chutar").disabled = false;
  document.getElementById("reset").disabled = true;
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
}
