import Button from "../common/Button";
import restauranfood from "../../assests/icons/restauranfood.jpg";

function  CallToAction(){
    return(
        <section id="calltoaction-section" className=" mx-5 bg-primarySea p-6 relative"> 
        <div className="w-[19%] mx-[13%]">
            <article className="text-white">
                <h1 className="text-primaryYellow text-5xl">Little Lemon</h1>
                <h2 className="text-xl">Chicago</h2>
                <p className="mt-4 mb-14 w-[80%]">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button  action={()=>alert('reserving')}>Reserve a Table</Button>
            </article>
        </div>
        <figure className="absolute top-[1rem] right-[11rem]">
            <img src={restauranfood} className="rounded-xl h-[375px] w-[325px]" alt="restaurant food"  />
        </figure>
        </section>
    )
}
export default CallToAction