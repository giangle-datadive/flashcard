import React from 'react';
import {connect} from 'react-redux';
import {addDeck, hideAddDeck, showAddDeck} from '../actions';
import {Link} from 'react-router';

const mapStateToProps = (state) => ({
    decks: state.decks,
    addingDeck: state.addingDeck
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

class Sidebar extends React.Component {
    componentDidUpdate() {
        if (this.props.addingDeck) {
            this.refs.add.focus();
        }
    }

    createNewDeck(event) {
        if (event.key !== 'Enter') return;
        this.props.addDeck(this.refs.add.value);
        this.props.hideAddDeck();
    }

    render() {
        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button role="button" onClick={e => this.props.showAddDeck()}>New Deck</button>
                <ul>
                    {this.props.decks.map((deck, index) =>
                        <li key={index}>
                            <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
                        </li>
                    )}
                </ul>
                {this.props.addingDeck && <input onKeyPress={this.createNewDeck.bind(this)} ref="add"/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);