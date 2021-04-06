import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const RetroCardControls = () => {
  const { state, setState } = useContext(StateContext);

  const updateItem = (e, category, cardIndex) => {
    setState({
      [category]: [
        ...state[category].slice(0, cardIndex),
        { textValue: e.target.value },
        ...state[category].slice(cardIndex + 1),
      ],
    });
  };

  const moveLeft = (category, cardIndex) => {
    switch (category) {
      case "wentWell":
        break;
      case "toImprove":
        //add to wentWell and remove from toImprove
        setState({
          ...state,
          wentWell: [...state.wentWell, ...state[category].slice(cardIndex)],
          [category]: [
            ...state[category].filter((_, index) => index !== cardIndex),
          ],
        });
        break;
      case "actionItems":
        setState({
          ...state,
          toImprove: [...state.toImprove, ...state[category].slice(cardIndex)],
          [category]: [
            ...state[category].filter((_, index) => index !== cardIndex),
          ],
        });
        break;
      default:
        break;
    }
  };

  const moveRight = (category, cardIndex) => {
    switch (category) {
      case "wentWell":
                setState({
                  ...state,
                  toImprove: [
                    ...state.toImprove,
                    ...state[category].slice(cardIndex),
                  ],
                  [category]: [
                    ...state[category].filter(
                      (_, index) => index !== cardIndex
                    ),
                  ],
                });
        break;
      case "toImprove":
        //add to actionItems and remove from toImprove
                     setState({
                       ...state,
                       actionItems: [
                         ...state.actionItems,
                         ...state[category].slice(cardIndex),
                       ],
                       [category]: [
                         ...state[category].filter(
                           (_, index) => index !== cardIndex
                         ),
                       ],
                     });
        break;
      case "actionItems":
        break;
      default:
        break;
    }
  };

  const deleteItem = (category, cardIndex) => {
    setState({
      ...state,
      [category]: state[category].filter((_, index) => index !== cardIndex),
    });
  };

  const dragItem = () => {};

  return {
    moveLeft,
    moveRight,
    dragItem,
    deleteItem,
    updateItem,
  };
};

export default RetroCardControls;
