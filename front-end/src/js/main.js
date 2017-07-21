/**
 * Created by Seth on 7/21/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

class HelloMessage extends React.Component{
    render(){
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(
    <HelloMessage name="Jane" />,
    document.getElementById('container')
);