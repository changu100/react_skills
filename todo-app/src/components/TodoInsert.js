import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import  './TodoInsert.scss'
//https://react-icons.netlify.com/#/icons/md



const TodoInsert = ({onInsert})=>{
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('')// value 갑 초기화

        e.preventDefault();
    },
    [onInsert,value],
    )

    // const onClick= useCallback(()=>{
    //     onInsert(value);
    //     setValue('');
    // },[onInsert,value]);
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
            {/* <button onClick={onClick}> */}
                <MdAdd/>
            </button>
        </form>
    )
}
export default TodoInsert;