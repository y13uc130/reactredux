import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; 
//bindActionCreators make sures that the action that is created (selectBook which is imported)
// to be wired up with all the reducers.


class Booklist extends Component {

    RenderList(){
        return this.props.book.map((kbook)=> {
            return (
                <li key={kbook.title}
                onClick={()=>this.props.selectBook(kbook)}
                className="list-group-item">{kbook.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.RenderList()}
            </ul>
        )
    }
}

//helper functions
function mapStateToProps(state){
    //whatever is returned will show up as props inside of BookList contianer
    //this funciton is a glue between react and redux.
    return {
        book: state.books
    };
}

    //whatever is returned( whatever we pass in here as the first argument) 
    //will show up as props inside of BookList
function mapDispatchToProps(yepdispatch){
    //whenever selectBook is called, result should be passed to all of our reducers.
    return bindActionCreators({selectBook: selectBook}, yepdispatch);
    //bindActionCreators' dispatch is a funnel that take all the actions and make sure 
    //they get passsed on to all the reducers inside the application.  
}


export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
