import React from "react";
// import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter'

const CounterContainer = ({number, increase, decrease})=>{
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
}

// const mapStateToProps = state => ({
//     number: state.counter.number,
// })

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// })

export default connect(
    state =>({
        number: state.counter.number
    }),

    {
        increase,
        decrease
    }


    // dispatch => 
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease,
    //         },
    //         dispatch,
    //     )

    // dispatch => ({
    //     increase : () => dispatch(increase()),
    //     decrease : () => dispatch(decrease()),
    // }),


    // mapStateToProps,
    // mapDispatchToProps,
)(CounterContainer)