import React from 'react';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state, {params}) => {
    return {params};
};

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                <h1>{this.props.params.deckId}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(App);