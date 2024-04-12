import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../Myportfolio";
import Aboutme from "./Aboutme";
import Contactme from "../Contactme";
export default function Home(){
    return(
        <div>
            <HeroSection/>
            <MySkills/>
            <Aboutme/>
            <MyPortfolio/>
            <Contactme/>
        </div>
    )
}