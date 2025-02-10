export default function Profile({data,setData}){
    function handleOnChange(event){
        setData(prev=>{ return {...prev, ...{[event.target.name]:event.target.value}}})
    }

    return (<>
        <div className="control-wrapper">
            <label htmlFor="name"> Name</label>
            <input type="text" name="name" id="name" value={data.name} onChange={handleOnChange} />
        </div>
        <div className="control-wrapper">
            <label htmlFor="email">Email </label>
            <input type="email" name="email" id="email" value={data.email} onChange={handleOnChange} />
        </div>
        <div className="control-wrapper">
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" value={data.age} onChange={handleOnChange} />
        </div>
    </>)
}