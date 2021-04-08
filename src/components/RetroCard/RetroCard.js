import { useContext } from "react";
import styles from "./RetroCard.module.css";
import RetroCardControls from "./RetroCardControls";
import { StateContext } from "../../contexts/StateContext";
import { Draggable } from "react-beautiful-dnd";

const RetroCard = ({ backGround, category, identify }) => {
  const { updateItem, deleteItem, moveLeft, moveRight } = RetroCardControls();
  const { state } = useContext(StateContext);

  return (
    <>
      <Draggable
        key={`${category}-${identify}`}
        draggableId={state[category].columnId + String(identify)}
        index={identify}
      >
        {(provided) => (
          <div
            className={`${styles["RetroCard"]} ${styles[backGround]}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <textarea
              required={true}
              value={state[category].data[identify].textValue}
              className={styles["textbox"]}
              onChange={(e) => {
                updateItem(e, category, identify);
              }}
            />
            <div className={styles["buttonContainer"]}>
              <button
                className={styles["textboxButton"]}
                onClick={() => moveLeft(category, identify)}
              >
                &lt;
              </button>
              <button
                className={styles["textboxButton"]}
                onClick={() => deleteItem(category, identify)}
              >
                {"x"}
              </button>
              <button
                className={styles["textboxButton"]}
                onClick={() => moveRight(category, identify)}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default RetroCard;
