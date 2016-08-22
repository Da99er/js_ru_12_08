import React, { Component } from 'react';
import * as lib from '../lib/index';

export default (Component, libs_names) => {
    return class ToggleOpenComponent extends Component {

        state = this.props.state||{}

        render() {
            let libs_functions = {};
            let that = this;
            libs_names.map(e => {
                libs_functions[e] = {};
                for (let i in lib[e]) {
                    libs_functions[e][i] = lib[e][i].bind(that);
                }
            });

            let husk = {
                props: this.props,
                lib: libs_functions,
                state: this.state
            }

            return <Component {...husk } />
        }
    }
}


/*es 6 и es7
constructor() {
    super()
    this.state = {
        isOpen: false
    }
}

state = {
    isOpen: false,
}
*/
