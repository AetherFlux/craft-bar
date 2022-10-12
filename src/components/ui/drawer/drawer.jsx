import classes from "./drawer.module.css"

const Drawer = props => {
    return (
        <nav className={props.showDrawer ? `${classes.drawer} ${classes.open}` : classes.drawer}>
            <ul className={`${classes.navigation} ${classes.flex}`}>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Menu</span>
                </li>
                <li>
                    <span>Order</span>
                </li>
            </ul>
        </nav>
    );
}

export default Drawer;