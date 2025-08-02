import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";

const Home = () => {
    const {isError} = useErrorPage();

    return !isError ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;