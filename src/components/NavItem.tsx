import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import {defaultHero} from "../utils/constants.ts";

interface NavItemProps {
    itemTitle: string,
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero = defaultHero} = useContext(SWContext);
    return (
        <NavLink to={`/${itemTitle}/${hero}`}><Button>{itemTitle}</Button></NavLink>
    )
}

export default NavItem;