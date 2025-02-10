import { useCallback, useEffect, useRef, useState } from "react";
import  "./Password.css";

export default function PasswordGenerator(){
    const [length,setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    
    const passWordref = useRef();
    const passwordGenerator = useCallback(()=>{
        let pass = '';
        let str = Array.from({length:26}, (_,i)=>String.fromCharCode(65+i)).join('');
        str = `${str}${Array.from({length:26}, (_,i)=>String.fromCharCode(97+i)).join('')}`;
        if(numberAllowed) str +='0123456789';
        if(charAllowed) str+='!@#$%^&*';
        
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length,numberAllowed,charAllowed,setPassword]);
    
    useEffect(()=>{
        passwordGenerator();
    },[length,numberAllowed,charAllowed,setPassword]);

    const copytoClipBoard = ()=>{
        window.navigator.clipboard.writeText(password);
        passWordref.current?.select();

    }
    return (<>
    <div className="main-container">
        <h1>Password Generator</h1>
       <div style={{display:'flex'}}>
        <input type="text" ref={passWordref} name="password" id="password" readOnly defaultValue={password} />
        <button onClick={copytoClipBoard}>Copy </button>
       </div>
       <div className="options">
        <label htmlFor="length">
        <input type="range" id='length' value={length} min={6} max={18} onChange={(e)=>setLength(e.target.value)} />{length} 
        </label>
        <label htmlFor="numberAllowed">
            <input type="checkbox"  id='numberAllowed'  checked={numberAllowed} onChange={()=>setNumberAllowed(prev=> !prev)}/>
            Number Allowed
        </label>
        <label htmlFor="specialAllowed">
            <input type="checkbox"  id='specialAllowed'  checked={charAllowed} onChange={()=>setCharAllowed(prev=>!prev)}/>
            Special Char Allowed
        </label>
       </div>
    </div>
    </>)
}