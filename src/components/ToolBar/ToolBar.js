import {Button} from 'react-bootstrap';
import styles from './ToolBar.module.css';
import {useState, useEffect} from 'react';

const ToolBar = () => {

    const [width, setWidth] = useState();

    useEffect(()=> {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener("resize", handleResize);
      return () =>
        window.removeEventListener("resize", handleResize);
    }, [])

    return (
      <div id={styles["toolBar"]}>
        <span className="mx-2">
          <strong>Layout:</strong>
        </span>

        <Button variant="light">
          {width > 600 ? "Column": "Row"}
        </Button>
      </div>
    );
}

export default ToolBar;
