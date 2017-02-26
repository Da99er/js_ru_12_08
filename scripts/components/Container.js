import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ArticleList from './ArticleList';
import Select from 'react-select';
import JqueryComponent from './JqueryComponent';
import DayPickerContainer from './DaypickerContainer';

class Container extends Component {

    propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => {
            return {
                label: article.title,
                value: article.id
            }
        });

        return <div>
            <Select options = {options} value = {this.state.selected} onChange={this.handleChange} multi={true} />
            <DayPickerContainer />
            <ArticleList articles = {this.props.articles} /> 
            <JqueryComponent articles = {this.props.articles} ref={this.getJQ} />
        </div>;
    }

    getJQ = (ref) => {
        this.jqRef = ref;
        //console.log('jqRef',ref);
        //console.log('jqRef',findDOMNode(ref));
    }

    handleChange = (selected) => {
        console.log(selected);

        this.setState({
            selected: selected
        });

    }
}

export default Container;
