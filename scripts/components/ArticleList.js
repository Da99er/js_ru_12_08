import React, { Component } from 'react';
import Article from './Article';

export default class ArticleList extends Component {
    //собственно задание было вынести эту логику в декоратор
    state = {
        openArticleId: null
    }

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.openArticleId === articleObject.id}
                    toggleOpenArticle = {this.toggleOpenArticle(articleObject.id)}
                />
            </li>);
        return (
            <ul className="articleList">
                {articleItems}
            </ul>
        )
    }

    toggleOpenArticle = id => ev => {
        if (ev) ev.preventDefault();
        if (id != this.state.openArticleId) {
            this.setState({
                openArticleId: id
            });
        } else {
            this.setState({
                openArticleId: null
            });
        }

    }
}
