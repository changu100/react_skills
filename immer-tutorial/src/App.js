import { useCallback, useRef, useState } from "react";
import produce from 'immer';
const App=()=>{
	const nextId = useRef(1);
	const[form, setForm] = useState({ name: '', username : ''});
	const[data, setData] = useState({ 
		array:[],
		uselessValue: null
	});

	//function for input modify
	const onChange = useCallback(
		e => {
			const{ name, value } = e.target;
			setForm(
        produce(form, draft =>{
          draft[name] = value
        })
      );
		},
		[form]
	); 

	//function for form register 
  const onSubmit = useCallback(
    e=>{
      e.preventDefault();
      const info ={
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // register new contents in an array
      setData(
        produce(data,draft => {
          draft.array.push(info);
        })
      );

      // form initalize
      setForm({
        name:'',
        username:''
      });
      nextId.current+=1;
    },
    [data, form.name, form.username]
  );

  //content delete
  const onRemove = useCallback(
    id=>{
      setData(
        produce(data,draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id) , 1);
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
        name="username"
        placeholder="ID"
        value={form.username}
        onChange={onChange}
        />
        <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={onChange}
        />
        <button type="submit">Register</button>

      </form>   
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={()=>onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default App;