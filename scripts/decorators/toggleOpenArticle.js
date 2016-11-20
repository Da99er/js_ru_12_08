import React, { Component } from 'react';
export default (Component) => {
    return class toggleOpenArticle extends Component {

        state = {
            openArticleId: null
        }

        toggleOpenArticle = id => ev => {
            if (ev) {
                ev.preventDefault();
            };

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

        render() {
            return <Component {...this.props } openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle} />
        }
    }
}
