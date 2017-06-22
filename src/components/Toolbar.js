import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {showAddDeck, filterCards} from '../actions';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
});

const Toolbar = ({deckId, showAddDeck, onFilter}) => {
    return (
        <div className="toolbar">
            <div>
                <button onClick={showAddDeck}>+ New Deck</button>
            </div>
            {deckId ?
                <div>
                    <Link className="btn" to={`/deck/${deckId}/new`}>+ New Card</Link>
                    <Link className="btn" to={`/deck/${deckId}/study`}>Study</Link>

                    <input type="search" className="search" onChange={e => onFilter(e.target.value)}/>
                </div>
                : null
            }
        </div>
    )
};


export default connect(null, mapDispatchToProps)(Toolbar);