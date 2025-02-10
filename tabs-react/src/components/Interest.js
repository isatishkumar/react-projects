export default function Interest({data,setData}){
    function handleOnChange(event){
        setData(prev=>{
            const current = event.target.checked ? [...prev.interest,event.target.value] :[...prev.interest.filter(item=>item!==event.target.value)];
            return {...prev,...{interest:current}}
        })
    }
    return (<>
     <div>
          <label htmlFor="coding">
            <input type="checkbox" name="coding" id="coding" value='coding' checked={data.interest.includes('coding')} onChange={handleOnChange} />
            Coding
            </label> 
          <label htmlFor="Music">
            <input type="checkbox" name="music" id="Music" value='music' checked={data.interest.includes('music')} onChange={handleOnChange} />
            Music
            </label> 
          <label htmlFor="cycling">
            <input type="checkbox" name="cycling" id="cycling" value='cycling' checked={data.interest.includes('cycling')} onChange={handleOnChange} />
            Cycling
            </label> 
    </div></>)
}