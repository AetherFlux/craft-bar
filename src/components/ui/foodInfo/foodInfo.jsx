import Modal from "../modal";
import classes from "./foodInfo.module.css";

const FoodInfo = (props) => {
  return (
    <Modal onClose={props.hideFoodInfoHandler}>
      <h1 className={classes["item-title"]}>{props.foodTitle}</h1>
      {props.foodInfo !== undefined ? (
        <div>
            <h2 className={classes["category-title"]}>Ingredients</h2>
            <p className={classes["category-text"]}>{props.foodInfo[0].ingredients}</p>
            <h2 className={classes["category-title"]}>Nutritional information</h2>
            <div className={classes["nutrition-section"]}>
                <span className={classes["category-text"]}>Calories</span>
                <span className={`${classes["category-text"]} ${classes["nutrition-value"]}`}>{props.foodInfo[0].nutrition[0].carbs}kcal</span>
            </div>
            <div className={classes["nutrition-section"]}>
                <span className={classes["category-text"]}>Protein</span>
                <span className={`${classes["category-text"]} ${classes["nutrition-value"]}`}>{props.foodInfo[0].nutrition[0].protein}g</span>
            </div>
            <div className={classes["nutrition-section"]}>
                <span className={classes["category-text"]}>Fat</span>
                <span className={`${classes["category-text"]} ${classes["nutrition-value"]}`}>{props.foodInfo[0].nutrition[0].fat}g</span>
            </div>
            <h2 className={classes["category-title"]}>Allergens</h2>
            <p className={classes["category-text"]}>{props.foodInfo[0].allergens}</p>
        </div>
      ) : (
        <p className={classes["category-text"]}>Nutritional information not found.</p>
      )}
    </Modal>
  );
};

export default FoodInfo;
