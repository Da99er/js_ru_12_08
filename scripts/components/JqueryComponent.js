import React, { Component, PropTypes } from 'react';

class JqueryComponent extends Component {

	componentDidMount(){
		this.refs.jqcomponent.style.color = 'blue';
	}

	render(){
		return <div ref="jqcomponent" >123</div>
	}
}


JqueryComponent.PropTypes = {

};

export default JqueryComponent;
