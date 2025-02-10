export default function Button({children,action,type}){
    const handleClick = (...args)=>{
        action(...args);
    }
    return (<button  className="rounded-[12px] px-3 py-1 font-semibold bg-primaryYellow text-highlightBlack" onClick={handleClick} type={type} >{children}</button>)
}