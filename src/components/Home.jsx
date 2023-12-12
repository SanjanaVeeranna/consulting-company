import { About } from "./About";
import ContactForm from "./ContactForm";
import Services from "./Services";
import Footer from "./Footer";
import Client from "./Client";

const  Home = () => {
    return (
       <>
<div className="imagecontainer">
    <img src ="https://w0.peakpx.com/wallpaper/1004/468/HD-wallpaper-gompa-background-wide-mountain-sunset-snow-winter.jpg" alt="Your Image" class="background-image"></img>
    
    <div class="overlay-content">
    <p>Developing Innovative Strategies</p>
    <p1>ACHIEVING GROWTH</p1>
    <button className="secondary-button">
            Book A Consultation
    </button>
  </div>
</div> 
<Services/> 
<About/>
<Client/>
<ContactForm/>
<Footer/>
</> 
    );
};
export default Home;