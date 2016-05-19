/**
 * @component Collection
 * @description Collection
 * @time 2016-4-28
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';

// import Component 

class Collection extends Component {
	render() {
		return (
			<p contenteditable="true">1121</p>
		)
	}

	upLoadFile(e){
		console.log(e.nativeEvent.target.files);
		ipc.send('uploadFile',e.nativeEvent.target.files[0].path);
	}
}

export default Collection;