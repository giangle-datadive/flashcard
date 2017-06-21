import React from 'react';
import {Link, browserHistory} from 'react-router';

class CardModal extends React.Component {
    render() {
        let {onDelete, card} = this.props;
        return (
            <div className="modal">
                <h1>{onDelete ? 'Edit' : 'New'} Card</h1>
                <label>Front :</label>
                <textarea ref="front" defaultValue={card.front}/>
                <label>Back :</label>
                <textarea ref="back" defaultValue={card.back}/>
                <p>
                    <button onClick={this.onSave.bind(this)}>Save</button>
                    <Link className="btn" to={`/deck/${card.deckId}`}>Cancel</Link>
                    {onDelete ?
                        <button onClick={this.onDelete.bind(this)} className="delete">Delete card</button>
                        : null
                    }
                </p>
            </div>
        )
    }

    onSave() {
        let {front, back} = this.refs;
        this.props.onSave(Object.assign({}, this.props.card, {
            front: front.value,
            back: back.value
        }));
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }

    onDelete() {
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
}

export default CardModal;