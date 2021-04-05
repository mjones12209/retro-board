import { Card } from "react-bootstrap";
import styles from "./CategoryContainer.module.css";
import CategoryContainerControls from "./CategoryContainerControls";
import RetroCard from "../RetroCard/RetroCard";

const CategoryContainer = () => {
  const { addItem, state } = CategoryContainerControls();

  return (
    <Card id={styles["categoryContainer"]} style={{ width: "100%" }}>
      <Card.Body>
        <div className={styles["RetroCategory"]}>
          <h2>Went Well</h2>
          <button
            className={styles["button"]}
            onClick={(e) => addItem(e, "wentWell")}
          >
            +
          </button>
          {state.wentWell &&
            state.wentWell.map((_, index) => {
              return (
                <RetroCard identify={index} category="wentWell" key={"wentWell-" + index} backGround="#019588">
                </RetroCard>
              );
            })}
        </div>
        <div className={styles["RetroCategory"]}>
          <h2>To Improve</h2>
          <button
            className={styles["button"]}
            onClick={(e) => addItem(e, "toImprove")}
          >
            +
          </button>
          {state.toImprove &&
            state.toImprove.map((_, index) => {
              return (
                <RetroCard
                  identify={index}
                  category="toImprove"
                  key={"toImprove-" + index}
                  backGround="#d11181"
                ></RetroCard>
              );
            })}
        </div>
        <div className={styles["RetroCategory"]}>
          <h2>Action Items</h2>
          <button
            className={styles["button"]}
            onClick={(e) => addItem(e, "actionItems")}
          >
            +
          </button>
          {state.actionItems &&
            state.actionItems.map((_, index) => {
              return (
                <RetroCard
                  identify={index}
                  category="actionItems"
                  key={"actionItem-" + index}
                  backGround="#962cdd"
                ></RetroCard>
              );
            })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryContainer;
