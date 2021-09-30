import React, {useState} from 'react';

const Say = () =>{
    const[message,setMessage] =useState('');
    const onClickEnter = () => setMessage('Hello!!');
    const onClickLeave = () => setMessage('Googbye!!');

    const [color, setColor]= useState('black');
    return(
        <div>
        <button onClick = {onClickEnter}>입장</button>
        <button onClick = {onClickLeave}>퇴장</button>
        <h1 style={{color}}>{message}</h1>
        <button style={{color:'red'}} onClick={()=> setColor('red')}
        >빨간색</button>
        <button style={{color:'red'}} onClick={()=> setColor('green')}
        >초록색</button>
        <button style={{color:'red'}} onClick={()=> setColor('blue')}
        >파란색</button>
        </div>
    )
}

export default Say;