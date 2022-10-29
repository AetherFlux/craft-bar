import classes from "./drawer.module.css"
import { NavLink } from "react-router-dom";

const Drawer = props => {
    return (
        <nav className={props.showDrawer ? `${classes.drawer} ${classes.open}` : classes.drawer}>
            <ul className={`${classes.navigation} ${classes.flex}`}>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/" onClick={props.drawerClickHandler} end>Home</NavLink>
                </li>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/menu" onClick={props.drawerClickHandler}>Menu</NavLink>
                </li>
                <li>
                    <NavLink className={x => x.isActive ? classes["active-link"] : null} to="/order" onClick={props.drawerClickHandler}>Order</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Drawer;