"use strict";

const navbar = document.querySelector(".main-nav");

if (navbar) {
    let ultimaPosicao = window.scrollY;
    const limiteInicial = 100;

    window.addEventListener("scroll", () => {
        const posicaoAtual = window.scrollY;

        // TOPO DA PÁGINA
        if (posicaoAtual <= limiteInicial) {
            navbar.classList.remove("nav-hidden");
            ultimaPosicao = posicaoAtual;
            return;
        }

        // ROLANDO PARA BAIXO
        if (posicaoAtual > ultimaPosicao) {
            navbar.classList.add("nav-hidden");
        }

        // ROLANDO PARA CIMA
        else {
            navbar.classList.remove("nav-hidden");
        }

        ultimaPosicao = posicaoAtual;
    });
}