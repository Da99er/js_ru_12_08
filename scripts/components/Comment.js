import React, { PropTypes } from 'react'

function Comment(props) {
    if (!props.comment) return null;
    const { comment: { user, text } } = props;
    return (
        <p className="comment">
            {text}
            <strong> by {user}</strong>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    })
}

export default Comment