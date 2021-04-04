import {Button} from 'react-bootstrap';
import styles from './ToolBar.module.css';

const ToolBar = () => {
    return (
      <div id={styles["toolBar"]}>
        <span className="mx-2">
          <strong>Layout:</strong>
        </span>
        <Button variant="light">Column</Button>
        <Button variant="light">Row</Button>
      </div>
    );
}

export default ToolBar;
