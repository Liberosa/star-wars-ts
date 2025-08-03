import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const {isError} = useErrorPage();
    return isError ? <ErrorPage/> : (
        <Text>{starWarsInfo}</Text>
    );
};

export default StarWars;