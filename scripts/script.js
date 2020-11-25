var jogador1, jogador2;
var letra = "X";
var jogadas_feitas = 0;

window.onload = () => {
    jogador1 = prompt("Digite o nome do primeiro jogador:");
    jogador2 = prompt("Digite o nome do segundo jogador:");

    let jogadores = document.querySelector('.jogadores')

    jogadores.append(jogador1)
    jogadores.append(" X ")
    jogadores.append(jogador2)
}


function verificarPreenchimento(elem) {
    if (elem.innerHTML != "X" && elem.innerHTML != "O") {
        jogar(elem);
    } else {
        alert("Posição já preenchida!");
    }
}

function jogar(elem) {
    if (letra == "X") {
        elem.innerHTML = "X";
        letra = "O";
    } else {
        elem.innerHTML = "O";
        letra = "X";
    }
    jogadas_feitas++;
    verificarCampeao();
}

function verificarCampeao() {
    c1 = document.querySelector("#c1").innerHTML;
    c2 = document.querySelector("#c2").innerHTML;
    c3 = document.querySelector("#c3").innerHTML;
    c4 = document.querySelector("#c4").innerHTML;
    c5 = document.querySelector("#c5").innerHTML;
    c6 = document.querySelector("#c6").innerHTML;
    c7 = document.querySelector("#c7").innerHTML;
    c8 = document.querySelector("#c8").innerHTML;
    c9 = document.querySelector("#c9").innerHTML;
    if (jogadas_feitas < 9) {
        if (
            // HORIZONTAL
            ((c1 == c2) && (c2 == c3)) ||
            ((c4 == c5) && (c5 == c6)) ||
            ((c7 == c8) && (c8 == c9)) ||
            // VERTICAL
            ((c1 == c4) && (c4 == c7)) ||
            ((c2 == c5) && (c5 == c8)) ||
            ((c3 == c6) && (c6 == c9)) ||
            // DIAGONAL
            ((c1 == c5) && (c5 == c9)) ||
            ((c3 == c5) && (c5 == c7))
        ) {
            if (letra == "X") {

                alert(jogador2 + " venceu!");
                setTimeout(function () {
                    location.reload();
                }, 2000);
            } else {

                alert(jogador1 + " venceu!");
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }

        }
    } else {
        alert("Deu velha!");
        setTimeout(function () {
            location.reload();
        }, 2000);
    }

}