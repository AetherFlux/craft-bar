import classes from "./drawer.module.css"
import { NavLink } from "react-router-dom";

const Drawer = props => {
    return (
        <nav className={props.showDrawer ? `${classes.drawer} ${classes.open}` : classes.drawer}>
            <ul className={`${classes.navigation} ${classes.flex}`}>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/order">Order</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Drawer;