import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList'

class Article extends Component {
    render() {
        const { article, openArticleId, toggleOpenArticle } = this.props;
        let showArticle = openArticleId ? (<div className="article" >{article.text}  <CommentList comments={article.comments } isOpen={false}  /></div>) : null;
        return <div>
                <h3 onClick = {toggleOpenArticle} >{article.title}</h3>   
                {showArticle}           
            </div>
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        date:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
        text:PropTypes.string,
        title:PropTypes.string
    }),
    openArticleId: PropTypes.bool,
    toggleOpenArticle: PropTypes.func
};


export default Article;


