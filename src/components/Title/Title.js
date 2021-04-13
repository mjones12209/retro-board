import { Card } from "react-bootstrap";
import styles from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <Card id={styles["title"]} style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Retro Board</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          by Michael Jones
        </Card.Subtitle>
        {children}
      </Card.Body>
    </Card>
  );
};

export default Title;
