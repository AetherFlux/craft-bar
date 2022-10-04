import classes from "./contentWrapper.module.css"

const ContentWrapper = props => {
    return (
        <div className={classes.content}>
            {props.children}
        </div>
    )
}

export default ContentWrapper;