import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string,
}

const NavItem = ({itemTitle}: NavItemProps) => {


    return (

        <NavLink to={`/${itemTitle}`}><Button>{itemTitle}</Button></NavLink>

    )
}

export default NavItem;