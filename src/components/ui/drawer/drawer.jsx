import classes from "./drawer.module.css"
import { NavLink } from "react-router-dom";

const Drawer = props => {
    return (
        <nav className={props.showDrawer ? `${classes.drawer} ${classes.open}` : classes.drawer}>
            <ul className={`${classes.navigation} ${classes.flex}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/order">Order</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Drawer;