import React from 'react';
const MyComponent= props =>{
    return (<div>my name is {props.name}<br/>
    children value is {props.children}    
    </div>)
};

MyComponent.defaultProps = {
    name: '기본이름'
}

export default MyComponent