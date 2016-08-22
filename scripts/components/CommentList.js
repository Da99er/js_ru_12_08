import React, { Component } from 'react';
import custom from '../decorators/custom';

import Comment from './Comment';

class CommentList extends Component {
    render() {
        const { comments } = this.props.props;
        const { toggleOpen } = this.props.lib.mouseEvents;
        const { isOpen } = this.props.state;

        let showHeadComment;

        if (!comments || !comments.length) {
            return (<div className="commentBlock" >
                <p className="toogleComments" >no comments yet</p>
            </div>);
        }

        let comment_head = (<p onClick={toggleOpen} className="toogleComments" >
            {isOpen ? `hide comments (${comments.length})` : `show comments (${comments.length})` }
        </p>);

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (<div className="commentBlock" >
            {comment_head}
            {isOpen?<ul>{commentItems}</ul>:null}
        </div>)
    }
}

CommentList.propTypes = {

}

export default custom(CommentList, ['mouseEvents']);
