import React, {useState} from "react"

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occassion, setOccassion] = useState("");
    const handleChange = (e) => {
setDate(e);
props.dispatch(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
  return (
<header>
    <section>
        <form onSubmit={handleSubmit}>
            <fieldset>
            <h1>Reservation Form</h1>
                <div>
                <label htmlFor="book-date">Choose date:</label>
                <input id="book-date" type='date' value={date} required onChange={(e) => handleChange(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="book-time">Choose time:</label>
                    <select id="book-time" value={time} onChange={e=> setTime(e.target.value)}>
                        <option id='booking-option' value="">select a time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes => {
                                return <option key={availableTimes}>{availableTimes}</option>
                            })  
                        } 
                    </select>
                </div>
                <div>
                    <label htmlFor="book-guest">Number of guests</label>
                    <input id="book-guest" value={guest} onChange={e=> setGuest(e.target.value)} min="1" ></input>
                </div>
                <div>
                    <label htmlFor="book-occassion">Select occassion</label>
                    <select id="book-occassion" key={occassion} value={occassion} onChange={e=> setOccassion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className='btnReceive'>
                    <input type="submit" aria-label="On Click" value={"Make your reservation"}></input>
                </div>
            </fieldset>
        </form>
    </section>
</header>
  )
};

export default BookingForm;
