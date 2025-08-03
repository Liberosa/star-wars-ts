import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.ts";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);
    const {isError} = useErrorPage();

    async function getPlanets() {
        const res = await fetch(`${base_url}/v1/planets`);
        const data: Array<{name: string}> = await res.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])

    return isError ? <ErrorPage/> : (
        <form className={`w-4/5 my-0 mx-auto rounded-[5px] bg-[#f2f2f2] p-5`} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label className={`w-full text-red-color`}>First Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`} type="text"
                       name="firstname" placeholder="Your first name..."/>
            </label>
            <label className={`w-full text-red-color`}>Last Name
                <input className={`text-black border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`} type="text"
                       name="lastname" placeholder="Your last name..."/>
            </label>
            <label className={`w-full text-red-color`}>Planet
                <select className={`border w-full text-black p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                        name="planet">{
                    planets.map(item => <option value={item} key={item}>{item}</option>)
                }
                </select>
            </label>
            <label className={`w-full text-red-color`}>Subject
                <textarea className={`text-black border h-52 w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                          name="subject" placeholder="Write something..."/>
            </label>
            <button
                className={`bg-[#4CAF50] text-white py-3 px-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]`}
                type="submit">Submit
            </button>
        </form>
    )
};

export default Contact;