import React from 'react';
import {connect} from 'react-redux';
import fuzzysearch from 'fuzzysearch';

import Card from './Card';

const matches = (query, card) => {
    return fuzzysearch(query, card.front) || fuzzysearch(query, card.back);
};

const mapStateToProps = ({cards, cardFilter}, {params: {deckId}}) => ({
    cards: cards.filter(card => card.deckId === deckId && matches(cardFilter, card)),
});

const VisibleDeck = ({cards, children}) => {
    return (
        <div>
            {cards.map((card, index) => <Card card={card} key={index}/>)}
            {children}
        </div>
    );
};

export default connect(mapStateToProps)(VisibleDeck);