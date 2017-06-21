import React from 'react';
import {connect} from 'react-redux';

import Card from './Card';

const mapStateToProps = ({cards}, {params: {deckId}}) => ({
    cards: cards.filter(card => card.deckId === deckId),
});

const VisibleDeck = ({cards, children}) => {
    console.log(cards);
    return (
        <div>
            {cards.map((card, index) => <Card card={card} key={index}/>)}
            {children}
        </div>
    );
};

export default connect(mapStateToProps)(VisibleDeck);