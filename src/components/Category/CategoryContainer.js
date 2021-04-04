import {Card} from 'react-bootstrap';
import styles from './CategoryContainer.module.css';

const CategoryContainer = () => {
    return (
      <Card id={styles["categoryContainer"]} style={{ width: "100%" }}>
        <Card.Body>
          <div className={styles["RetroCategory"]}>
            <h2>Went Well</h2>
            <button className={styles["button"]}>+</button>
          </div>
          <div className={styles["RetroCategory"]}>
            <h2>To Improve</h2>
            <button className={styles["button"]}>+</button>
          </div>
          <div className={styles["RetroCategory"]}>
            <h2 st>Action Items</h2>
            <button className={styles["button"]}>+</button>
          </div>
        </Card.Body>
      </Card>
    );
}

export default CategoryContainer;
