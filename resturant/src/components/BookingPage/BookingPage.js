import BookingForm from "./BookingForm";

function BookingPage(){
    return (
        <section className="mx-[15%] flex flex-col items-center">
            <h1 className="my-8 flex-1 text-2xl">Welcome to reservations</h1>
            <h2 className="flex-1 text-base"> Please fill the details</h2>
            <BookingForm></BookingForm>
        </section>
    )
}
export default BookingPage;