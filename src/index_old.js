/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
/*
class ArrayAppender{
    constructor(arr){
        this.arr = arr
    }
    append(new_arr){
        return [...this.arr, ...new_arr]
    }
}
//let apender = new ArrayAppender([1,2])

//let big_arr = apender.append([5,4])


class ObjectAppender{
    constructor(obj){
        this.obj = obj
    }
    append(new_obj){
        return {...this.obj,...new_obj}
    }
}

//let obj_appender = new ObjectAppender({'elf':'łuk',"krasnolud":"topor"})
*/







const axios = require('axios')

const r = axios.get("http://192.168.10.131:3001/").then((response)=>{
    console.log(response)
})
.catch(err => {
    console.log('error')
})
