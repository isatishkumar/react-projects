import { useReducer } from "react";
import { useTheme } from "./ThemeContext"


const reducer = (state, action)=>{
    if(action.type === 'light'){
       return {brightness:state.brightness+1}
    }
    if(action.type === 'dark'){
        return {brightness:state.brightness-1}
    }
    return state;
}
export default function Settings({data,setData}){
    const {theme,toggleTheme} = useTheme();
    const [state,dispatch] = useReducer(reducer,{brightness:10});
    function handleOnChange(event){
        console.log('called')
        toggleTheme();
        dispatch({type:event.target.value});
        setData(prev=>{ return {...prev, ...{[event.target.name]:event.target.value}}})
    }

    return (<>
     <div>
        {state.brightness}
     <label htmlFor="light">
            <input type="radio" name="theme" id="light" value='light' checked={data.theme === 'light'} onChange={handleOnChange} />
            Light
            </label> <label htmlFor="dark">
            <input type="radio" name="theme" id="dark" value='dark' checked={data.theme === 'dark'} onChange={handleOnChange} />
            Dark
            </label> 
        </div></>)
}