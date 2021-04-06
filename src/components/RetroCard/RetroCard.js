import styles from './RetroCard.module.css';
import RetroCardControls from './RetroCardControls';

const TextCard = ({backGround, children, category, identify}) => {
    const {updateItem, deleteItem, moveLeft, moveRight} = RetroCardControls();

    return (
      <>
        <div className={styles["RetroCard"]} style={{backgroundColor: backGround}}>
          <textarea className={styles["textbox"]} onChange={(e)=>{updateItem(e, category, identify)}}>
          {children}
          </textarea>
          <div className={styles["buttonContainer"]}>
            <button className={styles["textboxButton"]} onClick={()=>moveLeft(category, identify)}>&lt;</button>
            <button className={styles["textboxButton"]} onClick={()=>deleteItem(category, identify)}>{"x"}</button>
            <button className={styles["textboxButton"]} onClick={()=>moveRight(category, identify)}>&gt;</button>
          </div>
        </div>
      </>
    );
}

export default TextCard;
