import {characters, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import type {HeroInfo} from "../utils/types";
import {useParams} from "react-router";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const {heroId} = useParams<string>();


    useEffect(() => {
        const heroCache = JSON.parse(localStorage.getItem(`${heroId}`)!);
        if (heroCache && ((Date.now() - heroCache.timestamp) < period_month)) {
            setHero(heroCache.payload);
        } else {
            if (Object.keys(characters).includes(heroId as string)) {
                fetch(characters[heroId as keyof typeof characters].url)
                    .then(response => response.json())
                    .then(data => {
                        const info = {
                            name: data.name,
                            gender: data.gender,
                            birth_year: data.birth_year,
                            height: data.height,
                            mass: data.mass,
                            hair_color: data.hair_color,
                            skin_color: data.skin_color,
                            eye_color: data.eye_color
                        }
                        setHero(info);
                        localStorage.setItem(`${heroId}`, JSON.stringify({
                            payload: info,
                            timestamp: Date.now()
                        }));
                    })
            }
            if (!heroId) {
                fetch(characters.luke.url)
                    .then(response => response.json())
                    .then(data => {
                        const info = {
                            name: data.name,
                            gender: data.gender,
                            birth_year: data.birth_year,
                            height: data.height,
                            mass: data.mass,
                            hair_color: data.hair_color,
                            skin_color: data.skin_color,
                            eye_color: data.eye_color
                        }
                        setHero(info);
                        localStorage.setItem(`${heroId}`, JSON.stringify({
                            payload: info,
                            timestamp: Date.now()
                        }));
                    })
            }
        }
    }, [heroId])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span
                            className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}
                    {
                        (!heroId)?<img alt={'Luke'} src={characters.luke.img}/>:<img alt={heroId} src={characters[heroId as keyof typeof characters].img}/>
                    }

                </div>
            }
        </>
    );
};

export default AboutMe;