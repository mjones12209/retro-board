import { useContext, useEffect } from "react";
import styles from "./RetroCard.module.css";
import RetroCardControls from "./RetroCardControls";
import { StateContext } from "../../contexts/StateContext";
import { Draggable } from "react-beautiful-dnd";
import { InlineIcon } from "@iconify/react";
import thumbsUpSharp from "@iconify-icons/ion/thumbs-up-sharp";
import thumbsDownSharp from "@iconify-icons/ion/thumbs-down-sharp";
import autosize from "autosize";

const RetroCard = ({ backGround, category, identify }) => {
  const {
    updateItem,
    deleteItem,
    moveLeft,
    moveRight,
    incrementLikes,
    setError,
  } = RetroCardControls();
  const { state } = useContext(StateContext);

  let textarea;

  useEffect(() => {
    textarea.focus();
    autosize(textarea);
  }, [textarea]);

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
              <h4 className={styles["error"]}>
                {state[category].data[identify].error}
              </h4>
              <textarea
                required={true}
                name="noteData"
                ref={(c) => {
                  textarea = c;
                }}
                value={state[category].data[identify].textValue}
                className={styles["textbox"]}
                onChange={(e) => {
                  updateItem(e, category, identify);
                }}
                onBlur={(e) => {
                  e.target.value.trim() === ""
                    ? setError(e, category, identify, "Please enter text.")
                    : setError(e, category, identify, "");
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
                onClick={() => incrementLikes("likes", category, identify)}
              >
                <InlineIcon icon={thumbsUpSharp} />
                <span>{state[category].data[identify].likes}</span>
              </button>
              <button
                className={styles["textboxButton"]}
                onClick={() => deleteItem(category, identify)}
              >
                {"x"}
              </button>
              <button
                onClick={() => incrementLikes("dislikes", category, identify)}
              >
                <InlineIcon icon={thumbsDownSharp} />
                <span>{state[category].data[identify].dislikes}</span>
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
