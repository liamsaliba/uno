"use strict";
const Deck = require('./deck')
const CardStack = require('./cardstack')

class Game {
    constructor() {
        this.deck = null;
        this.pile = null;

        this.reset();
    }

    reset() {
        this.deck = makeDeck();
        this.pile = makePile();
    }

    makeDeck() {return new Deck();}
    makePile() {return new CardStack();}
}

module.exports = Game;