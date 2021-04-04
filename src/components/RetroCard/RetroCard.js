import styles from './RetroCard.module.css';

const TextCard = ({backGround, children}) => {
    return (
      <>
        <div className={styles["RetroCard"]} style={{backgroundColor: backGround}}>
          <textarea className={styles["textbox"]}>
          {children}
          </textarea>
          <div className={styles["buttonContainer"]}>
            <button className={styles["textboxButton"]}>{"<"}</button>
            <button className={styles["textboxButton"]}>{"x"}</button>
            <button className={styles["textboxButton"]}>{">"}</button>
          </div>
        </div>
      </>
    );
}

export default TextCard;
