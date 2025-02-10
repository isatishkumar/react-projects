import { useEffect, useState } from "react";
import Button from "../common/Button";
var fetchAPI = window.fetchAPI;

function BookingForm() {
    const [bookingForm, setBookingForm] =  useState({});
    const [availableSlots, setAvailableSlots] =  useState({});

    useEffect(()=>{
        const slots = fetchAPI(new Date());
        console.log(slots);
        setAvailableSlots(slots);
    },[])

    return (
        <section id="form-section">
            <form className="grid max-w-[200px] gap-[20]">
                <fieldset>
                    <label htmlFor="res-date"> Choose date</label>
                    <input type="date" id="res-date" />
                </fieldset>
                <fieldset>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </fieldset>
                <fieldset>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                </fieldset>
                <fieldset>
                <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
                </fieldset>
                <Button type='submit'> Make Your Reservation </Button>
            </form>
        </section>
    )
}
export default BookingForm;