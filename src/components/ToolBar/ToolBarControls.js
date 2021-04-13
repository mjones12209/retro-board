import { useState } from "react";


const ToolBarControls = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    return {
        width,
        setWidth,
        handleResize,
    }
}

export default ToolBarControls
