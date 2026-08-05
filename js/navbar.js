"use strict";

const navbar = document.querySelector(".main-nav");

if (navbar) {
    let ultimaPosicao = window.scrollY;
    const limiteInicial = 100;

    window.addEventListener("scroll", () => {
        const posicaoAtual = window.scrollY;

        // Mantém a navbar visível perto do topo.
        if (posicaoAtual <= limiteInicial) {
            navbar.classList.remove("nav-hidden");
            ultimaPosicao = posicaoAtual;
            return;
        }

        // Descendo: esconde.
        if (posicaoAtual > ultimaPosicao) {
            navbar.classList.add("nav-hidden");
        }

        // Subindo: mostra.
        else {
            navbar.classList.remove("nav-hidden");
        }

        ultimaPosicao = posicaoAtual;
    });
}