import React, { Component } from 'react';
import Article from './Article';
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {
    render() {
        const { articles, toggleOpenArticle, openArticleId } = this.props;

        const articleItems = articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    openArticleId = {openArticleId === articleObject.id}
                    toggleOpenArticle = {toggleOpenArticle(articleObject.id)}
                />
            </li>);

        return <ul className="articleList">
                {articleItems}
            </ul>
    }

}

export default toggleOpenArticle(ArticleList);
