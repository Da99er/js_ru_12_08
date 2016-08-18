import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const articleItems = props.articles.map(articleObject => <li key = {articleObject.id}><Article article = {articleObject}/></li>)
    return (
        <ul className="articleList" >
            {articleItems}
        </ul>
    )
}