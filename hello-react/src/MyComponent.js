import React, { Component } from 'react';
import propTypes from 'prop-types';
/*
const MyComponent= ( { name, favoriteNumber, children }) =>{
    
    return (
    <div>p.96<br/>
    my name is {name}<br/>
    children value is {children}   <br/>
    my favorite Number is {favoriteNumber}
    </div>
    );
};

MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes={
    name : propTypes.string,
    favoriteNumber: propTypes.number.isRequired
};
*/

class MyComponent extends Component{
    static defaultProps = {
        name:'기본 이름'
    };
    static propTypes = {
        name : propTypes.string,
        favoriteNumber: propTypes.number.isRequired
    };
    render(){
        const{name , favoriteNumber, children} = this.props;
        return (
            <div>p.103<br/>
            my name is {name}<br/>
            children value is {children}   <br/>
            my favorite Number is {favoriteNumber}
            </div>
            );
    };
}
export default MyComponent