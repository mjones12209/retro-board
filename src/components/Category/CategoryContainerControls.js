import {useState} from 'react';

const CategoryContainerControls = () => {

    // const [state, setState] = useState({
    //     wentWell: [],
    //     toImprove: [],
    //     actionItems: []
    // });

    const [wentWell, setWentWell] = useState([]);

    const addItem = (event, category) => {
        switch (category) {
            case "wentWell":
                setWentWell(...wentWell, {});
                break;
            default:
                break;
        }
    }

    return {
        wentWell,
        addItem
    }
}

export default CategoryContainerControls;
