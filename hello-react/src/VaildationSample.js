import React,{Component} from "react";

import './VaildationSample.css';

class VaildationSample extends Component{
    state = {
        password:'',
        clicked: false,
        vaildated: false
    }

    handleChange = (e) =>{
        this.setState({
            password :e.target.value
        })
    }

    handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated: this.state.password === '0000'
        })
    }
    
    render(){
        return (
        <div>
        <input 
        type = "password"
        value={this.state.password}
        onChange ={this.handleChange}
        className={this.state.clicked? (this.state.vaildated? 'success':'failure'):''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
        </div>
        )
    }
}
export default VaildationSample;