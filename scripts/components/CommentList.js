import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toogleOpen.js';

class CommentList extends Component {
    render() {
        const { comments, toggleOpen, isOpen } = this.props;

        if (!comments || !comments.length) {
            return (<div className="commentBlock" >
                <p className="toogleComments" >no comments yet</p>
            </div>);
        }

        let comment_head = (<p onClick={toggleOpen} className="toogleComments" >
            {isOpen ? `hide comments (${comments.length})` : `show comments (${comments.length})` }
        </p>);

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return <div className="commentBlock" >
                {comment_head}
                {isOpen?<ul>{commentItems}</ul>:null}
            </div>;

    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool.isRequired
}

export default toggleOpen(CommentList);
