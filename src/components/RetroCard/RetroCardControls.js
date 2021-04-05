import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const RetroCardControls = () => {
  const { state, setState } = useContext(StateContext);

  const updateItem = (e, category, cardIndex) => {

    setState({
      [category]: [
        ...state[category].slice(0, cardIndex),
        {textValue: e.target.value},
        ...state[category].slice(cardIndex+1)
      ]
    })
  }
  
  const moveItem = (event, newCategory, category, cardIndex) => {

  }

  const deleteItem = (category, cardIndex) => {
    setState({...state,
      [category]: state[category].filter((_,index)=> index !== cardIndex)
    });
  }

  const dragItem = ()=> {

  }

  return {
      moveItem,
      dragItem,
      deleteItem,
      updateItem
  };
};

export default RetroCardControls;
