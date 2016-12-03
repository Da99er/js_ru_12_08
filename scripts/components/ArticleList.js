import React, { Component, PropTypes } from 'react';
import Article from './Article';
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {

    /*componentWillMount(){
        console.log("@>componentWillMount");
    }

    componentDidMount(){
        console.log("@>componentDidMount");
    }*/

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

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleOpenArticle(ArticleList);
