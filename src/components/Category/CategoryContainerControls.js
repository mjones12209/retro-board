import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const CategoryContainerControls = () => {
  
  const { state, setState } = useContext(StateContext);

  const addItem = (event,category) => {
    event.preventDefault();
      setState({
        ...state,
        [category]: {...state[category], data: [
          ...state[category].data.concat({textValue: ""}),
        ]},
      });
  };

  return {
    addItem,
    state,
  };
};

export default CategoryContainerControls;
