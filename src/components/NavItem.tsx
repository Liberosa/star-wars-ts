import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";

interface NavItemProps {
    itemTitle: string,
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero} = useContext(SWContext);
    return (
        <NavLink to={`/${itemTitle}/${hero}`}><Button>{itemTitle}</Button></NavLink>
    )
}

export default NavItem;