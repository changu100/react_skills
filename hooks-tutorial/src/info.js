import React, {useEffect, useReducer, useState} from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name]:action.value
    };
}


const Info =()=>{
    const [state,dispatch] = useReducer(reducer,{
        name: '',
        nickname:''
    });

    const {name,nickname }= state;

    const onChange = e => {
        dispatch(e.target)
    }


    return (
        <div>
            <div>
                <input value={name} onChange={onChange}/>
                <input value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
            </div>
        </div>
    )
    // const[name, setName] =useState('')
    // const [nickname, setNickname] = useState('');

    // useEffect (()=>{
    //     // this function work when first render and rerender 
    //     console.log('randering is complete!');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    // useEffect(()=>{
    //     console.log("when you mount this component, you can see this log!")
    // },[])


    // useEffect(() =>{
    //     // this component work when {name} changed 
    //     console.log(name);
    //     return ()=>{
    //         // this component work when rerendering
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[name]);


    // useEffect(()=>{
    //     return ()=>{
    //         console.log("this component work when just Unmount")
    //     }
    // },[])

    // const onChangeName = e =>{
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e=>{
    //     setNickname(e.target.value);
    // };

    // return (
    //     <div>
    //         <div>
    //             <input value={name} onChange={onChangeName}/>
    //             <input value={nickname} onChange={onChangeNickname}/>
    //         </div>
    //         <div>
    //             <div>
    //                 <b>이름:</b>{name}
    //             </div>
    //         <div>
    //             <b>닉네임:</b> {nickname}
    //         </div>
    //         </div>
    //     </div>
    // )
}
export default Info;