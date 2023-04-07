import React, {Component } from 'react'
class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><img src="http://localhost:3000/tik.jpg"/>
            <h4>tikur anbesa hospital online pationt appointmet page</h4>
            <hr></hr></div>
        );
    }
}

export default LogoComponent;