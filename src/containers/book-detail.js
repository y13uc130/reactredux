import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render() {
        if(!this.props.bookpo){
            return <div>Select a book to get started. </div>
        }
        return(
                <div>
                    <h3>Details for: </h3>
                    <div>{this.props.bookpo.title}</div>
                    <div>Pages: {this.props.bookpo.pages}</div>
                </div>
        )
    }
}

//helper function

function mapStateToProps(state){
    return {
        bookpo : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);