import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';
import Select from 'react-select';

class Container extends Component {



    render() {
        const options = this.props.articles.map(article => {
            return {
                label: article.title,
                value: article.id
            }
        });

        function logChange(val) {
            console.log("Selected: " , val);
        }

        return <div>
            <Select options = {options} onChange={logChange} />
            <ArticleList articles = {this.props.articles} /> 
        </div>;
    }
}

Container.propTypes = {
    articles: PropTypes.array.isRequired
}


export default Container;
