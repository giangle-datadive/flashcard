import {editCard, deleteCard} from '../actions';
import {connect} from 'react-redux';
import CardModal from './CardModal';

const mapStateToProps = ({cards}, {params: {cardId}}) => ({
    card: cards.find(card => card.id === parseInt(cardId))
});

const mapDispatchToProps = dispatch => ({
    onSave: card => dispatch(editCard(card)),
    onDelete: cardId => dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);