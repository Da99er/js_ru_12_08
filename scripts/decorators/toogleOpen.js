import React, { Component } from 'react';
export default (Component) => {
    return class ToggleOpenComponent extends Component {

        state = {
            isOpen: false
        }

        toggleOpen = (ev) => {

            if (ev) {
                ev.preventDefault();
            }

            this.setState({
                isOpen: !this.state.isOpen
            });

        }

        render() {
            return <Component {...this.props } isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen} />
        }
    }
}
