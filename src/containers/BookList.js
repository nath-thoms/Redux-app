import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {

    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li  
                    key={book.title}
                    onClick={ () => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned here will show up as props inside of BookList

    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all our reducers.

    return bindActionCreators( {selectBook : selectBook}, dispatch)
}

// Promote BookList from component to container. Needs to know about new dispatch method,
// SelectBook and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);