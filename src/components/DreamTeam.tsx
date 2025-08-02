import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

const DreamTeam = () => {
    const {hero} = useContext(SWContext);
    return (
        <section className="float-right w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.filter(f => f !== hero).map((f, i) => <Friend friend={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;