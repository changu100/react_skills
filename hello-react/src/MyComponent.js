import React from 'react';
import propTypes from 'prop-types';

const MyComponent= ( { name, favoriteNuber, children }) =>{
    
    return (
    <div>p.96<br/>
    my name is {name}<br/>
    children value is {children}   <br/>
    my favorite Nuber is {favoriteNuber}
    </div>
    );
};

MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes={
    name : propTypes.string,
    favoriteNuber: propTypes.number.isRequired
};

export default MyComponent