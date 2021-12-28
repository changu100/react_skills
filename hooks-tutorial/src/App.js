
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Info from './info'
import Average from './Average'


const COUNTER_APP = 1;
const INFO_APP = 2
const AVERAGE_APP = 3



const STATUS = AVERAGE_APP;
const App = () =>{

  return <Average />
}

export default App;
