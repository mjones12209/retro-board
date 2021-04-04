import {useState} from 'react';
import {Card} from 'react-bootstrap';
import styles from './CategoryContainer.module.css';
// import CategoryContainerControls from './CategoryContainerControls';
import RetroCard from '../RetroCard/RetroCard';

const CategoryContainer = () => {
  // const {wentWell, addItem} = CategoryContainerControls();

  const [wentWell, setWentWell] = useState([]);

  const addItem = (category) => {
    switch (category) {
      case "wentWell":
        setWentWell(wentWell.push({}));
        break;
      default:
        break;
    }
  };
    return (
      <Card id={styles["categoryContainer"]} style={{ width: "100%" }}>
        <Card.Body>
          <div className={styles["RetroCategory"]}>
            <h2>Went Well</h2>
            <button
              className={styles["button"]}
              onClick={(e) => addItem("wentWell")}
            >
              +
            </button>
            {wentWell &&
              wentWell.map((object, index) => {
                return (
                  <RetroCard key={"wentWell-"+index} backGround="#019588">{object.text}</RetroCard>
                );
              })}
          </div>
          <div className={styles["RetroCategory"]}>
            <h2>To Improve</h2>
            <button className={styles["button"]}>+</button>
            {/* {state.toImprove && state.toImprove.map((object) => {
              return <RetroCard backGround="#d11181">{object.text}</RetroCard>;
            })} */}
          </div>
          <div className={styles["RetroCategory"]}>
            <h2 st>Action Items</h2>
            <button className={styles["button"]}>+</button>
            {/* {state.actionItems && state.actionItems.map((object) => {
              return <RetroCard backGround="#962cdd">{object.text}</RetroCard>;
            })} */}
          </div>
        </Card.Body>
      </Card>
    );
}

export default CategoryContainer;
