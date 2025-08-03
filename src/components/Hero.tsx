import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

const Hero = () => {
    const {hero = defaultHero} = useContext(SWContext);

    return (
        <section className="float-left w-1/4 mr-4">
            <img className="w-full shadow-hero" src={characters[hero].img} alt="Hero"/>
        </section>
    );
};

export default Hero;