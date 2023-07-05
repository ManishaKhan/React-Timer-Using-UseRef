import React, { useRef, useState } from 'react'

export const Timer = () => {

    const[input,setInput]=useState("");
    const[second,setSecond]=useState(0);

    const inputRef=useRef();
    const renders=useRef(0);
    const timerRef=useRef(0);

    function handleInput(e){
        setInput(e.target.value);
        renders.current++;
    }

    const StartTimer=()=>{
        timerRef.current=setInterval(()=>{
            renders.current++;
            
            setSecond(prev=>prev+1);
        },1000)
    }

    const StopTimer=()=>{
        clearInterval(timerRef.current);
    }

    const RestartTimer=()=>{
        StopTimer();
        setSecond(0);
        //renders.current=0;
    }
  return (
    <div>
        <input
        ref={inputRef}
        type="text"
        placeholder='Random Input Fleid'
        value={input}
        onChange={handleInput}
        >
        </input>
        <br></br>
        <h3>Renders: {renders.current}</h3>
        <h3>{input}</h3>


        <br>
        </br>
        <h1>Seconds: {second}</h1>
        <section>
            <button onClick={StartTimer}>Start</button>
            <button onClick={StopTimer}>Stop</button>
            <button onClick={RestartTimer}>Restart</button>
        </section>
    </div>
  )
}
