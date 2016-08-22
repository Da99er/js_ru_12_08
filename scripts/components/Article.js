import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList'

import custom from '../decorators/custom';

class Article extends Component {
    render() {
        const { article, isOpen, toggleOpenArticle } = this.props;
        let showArticle = isOpen ? (<div className="article" >{article.text}  <CommentList comments={article.comments } state={{"isOpen":false}} /></div>) : null;
        return (
            <div>
                <h3 onClick = {toggleOpenArticle} >{article.title}</h3>   
                {showArticle}           
            </div>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        date:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
        text:PropTypes.string,
        title:PropTypes.string
    }),
    isOpen: PropTypes.bool,
    toggleOpenArticle: PropTypes.func
};


export default Article;


