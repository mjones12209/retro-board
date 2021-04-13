import { Card } from "react-bootstrap";
import styles from "./CategoryContainer.module.css";
import CategoryContainerControls from "./CategoryContainerControls";
import RetroCard from "../RetroCard/RetroCard";
import { Droppable } from "react-beautiful-dnd";

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
          <Droppable droppableId={state.wentWell.columnId}>
            {(provided) => (
              <div
                className={styles["wentWellColum"]}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.wentWell.data &&
                  state.wentWell.data.map((_, index) => {
                    return (
                      <RetroCard
                        key={"wentWell" + index}
                        identify={index}
                        category="wentWell"
                        backGround="greenCard"
                      ></RetroCard>
                    );
                  })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className={styles["RetroCategory"]}>
          <h2>To Improve</h2>
          <button
            className={styles["button"]}
            onClick={(e) => addItem(e, "toImprove")}
          >
            +
          </button>
          <Droppable droppableId={state.toImprove.columnId}>
            {(provided) => (
              <div
                className={styles["toImproveColumn"]}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.toImprove &&
                  state.toImprove.data.map((_, index) => {
                    return (
                      <RetroCard
                        identify={index}
                        category="toImprove"
                        key={"toImprove-" + index}
                        backGround="pinkCard"
                      ></RetroCard>
                    );
                  })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className={styles["RetroCategory"]}>
          <h2>Action Items</h2>
          <button
            className={styles["button"]}
            onClick={(e) => addItem(e, "actionItems")}
          >
            +
          </button>
          <Droppable droppableId={state.actionItems.columnId}>
            {(provided) => (
              <div
                className={styles["actionItemsColumn"]}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.actionItems &&
                  state.actionItems.data.map((_, index) => {
                    return (
                      <RetroCard
                        identify={index}
                        category="actionItems"
                        key={"actionItem-" + index}
                        backGround="purpleCard"
                      ></RetroCard>
                    );
                  })}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryContainer;
