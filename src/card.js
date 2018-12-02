"use strict"


class Card {
    constructor(traits) {
        this.traits = traits;
        this.id = 0;
        
    }

    get isEmpty() { return this.cards.length == 0; }
    get size() { return this.cards.length;}

    // Fisher-Yates Shuffle
    shuffle() {
        let m = this.size(), i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            // swap randomly selected remaining index to the end
            // Uses object destructuring
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    }

    make() {
        this.cards = [];
    }

    sort() {
        
    }
} 

module.exports = Card;