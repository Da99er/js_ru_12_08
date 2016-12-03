import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import CommentCount from './CommentCount';
import toggleOpen from '../decorators/toogleOpen.js';

class CommentList extends Component {
    render() {
        const { comments, toggleOpen, isOpen } = this.props;

        if (!comments || !comments.length) {
            return (<div className="commentBlock" >
                <p className="toogleComments" >no comments yet</p>
            </div>);
        }


        const toogleButton = <a onClick={toggleOpen} className="toogleComments" >            
            {isOpen ? 'hide comments' : 'show comments'} <CommentCount count = {comments.length} /> 
        </a>;

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return <div className="commentBlock" >
                {toogleButton}
                {isOpen?<ul>{commentItems}</ul>:null}
            </div>;

    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool.isRequired
}

export default toggleOpen(CommentList);
