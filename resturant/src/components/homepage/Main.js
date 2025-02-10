import CallToAction from "../callToAction/CallToAction";
import Chicago from "../chicago/Chicago";
import Testimonials from "../customerSay/Testimonials";
import Specials from "../specials/Specials";

function Main(){
    return (<>
    <CallToAction/>
    <main className="mx-[15%]">
    <Specials/>
    <Testimonials/>
    <Chicago/>
    </main>
    </>)
}
export default Main;