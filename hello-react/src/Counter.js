import React, {Component} from 'react';
/*
class Counter extends Component{
    constructor(props){
        super(props);
        // state의 초깃값 설정하기
        this.state= {
            number:0,
            fixedNumber :0
        };
    }
    render(){
        const {number,fixedNumber} = this.state;// state를 조회할때 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                //onClick을 통해 버튼이 클릭되었을때 호출할함수를 지정합니다. 
                onClick={() =>{
                    //this.setState를ㄹ 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    this.setState({number:number +1});
                }}>
                    +1
                </button>
            </div>
        );
    }
}
*/
class Counter extends Component{
    // state의 초깃값 설정하기
    state= {
        number:0,
        fixedNumber :0
    };
    render(){
        const {number,fixedNumber} = this.state;// state를 조회할때 this.state로 조회합니다.
        return (
            <div>
                <h1>p 108</h1>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                //onClick을 통해 버튼이 클릭되었을때 호출할함수를 지정합니다. 
                onClick={() =>{
                    //this.setState를ㄹ 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    
                    this.setState({number:number +1}
                        ,()=>{
                        console.log("방금 setState가 호출되었습니다.");
                    });
                    
                    /*
                    this.setState(prevState =>{
                        return {
                            number: prevState.number +1
                        }
                    })
                    this.setState(prevState =>{
                        return {
                            number: prevState.number +1
                        }
                    })
                    */
                }}>
                    +1
                </button>
            </div>
        );
    }
}
export default Counter;