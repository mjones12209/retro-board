import {Button} from 'react-bootstrap';
import { useEffect } from 'react';
import ToolBarControls from './ToolBarControls';
import styles from "./ToolBar.module.css";


const ToolBar = () => {

    const {width, handleResize} = ToolBarControls();
    
    useEffect(()=> {
      window.addEventListener("resize", handleResize);
      return () =>
        window.removeEventListener("resize", handleResize);
    })

    return (
      <div id={styles['toolBar']}>
        <span className="mx-2">
          <strong>Layout:</strong>
        </span>

        <Button variant="light" >
          {width > 600 ? "Row" : "Column"}
        </Button>
      </div>
    );
}

export default ToolBar;
