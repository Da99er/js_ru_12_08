import React, { Component, PropTypes } from 'react';

class CommentCount extends Component {

    shouldComponentUpdate(nextProps, nextState) {
    	return this.props.count != nextProps.count;
    }

    render() {   
        return <strong>({this.props.count})</strong>
    }

}


CommentCount.PropTypes = {
    count: PropTypes.number
}


export default CommentCount;
