
import React from 'react';

const cloud = ()=> (
	<svg fill="#FFFFFF" height="40" viewBox="0 0 24 24" width="40" >
	    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
	    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)

const transmission = () => (
	<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" >
	    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
	    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)

const sharedToMe = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)

const sharedByMe = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M0 0h24v24H0V0z" fill="none"/>
	 	   <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"/>
	</svg>
	)

const recentUse = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	  	<path d="M0 0h24v24H0z" fill="none"/>
	    	<path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"/>
	</svg>
	)
const folder = () =>(
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)

const  deleteFiles = () => (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
		<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
)

const settings = () => (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
		<path d="M0 0h24v24H0z" fill="none"/>
		<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
	</svg>
)

const myPhoto = () => (
	<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" >
	    <circle cx="12" cy="12" r="3.2"/>
	    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
	    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
)

const home = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
)

const back = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M0 0h24v24H0z" fill="none"/>
	    	<path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
	</svg>
	)
const blackFrame = ()=> (
	<svg viewBox="0 0 24 24" className="black-frame">
		<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
	</svg>
	)
const select = ()=> (
	<svg viewBox="0 0 24 24" className="select-svg" fill='red'>
		<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
	</svg>
	)
const add = ()=> (
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)
const download = ()=>(
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    	<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
	    	<path d="M0 0h24v24H0z" fill="none"/>
	</svg>
	)
const close = ()=>(
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
	    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
)

const expandMore = ()=>(
	<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" >
	    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
	    <path d="M0 0h24v24H0z" fill="none"/>
	</svg>
)

const SVGIcon = {
	cloud: cloud,
	transmission: transmission,
	sharedToMe: sharedToMe,
	sharedByMe: sharedByMe,
	recentUse: recentUse,
	folder: folder,
	deleteFiles: deleteFiles,
	settings: settings,
	home:home,
	back:back,
	blackFrame:blackFrame,
	select:select,
	add:add,
	download:download,
	close:close,
	expandMore: expandMore,
	myPhoto: myPhoto
}

export default SVGIcon