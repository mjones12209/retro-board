import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
import DomPurify from "dompurify";

const RetroCardControls = () => {
  const { state, setState } = useContext(StateContext);

  const incrementLikes = (type, category, cardIndex) => {
    setState({
      ...state,
      [category]: {
        ...state[category],
        data: [
          ...state[category].data.slice(0, cardIndex),
          {
            ...state[category].data[cardIndex],
            [type]: state[category].data[cardIndex][type] + 1,
          },
          ...state[category].data.slice(cardIndex + 1),
        ],
      },
    });
  };

  const updateItem = (e, category, cardIndex) => {
    setState({
      ...state,
      [category]: {
        ...state[category],
        data: [
          ...state[category].data.slice(0, cardIndex),
          {
            ...state[category].data[cardIndex],
            textValue: DomPurify.sanitize(e.target.value),
          },
          ...state[category].data.slice(cardIndex + 1),
        ],
      },
    });
  };

  const moveLeft = (category, cardIndex) => {
    switch (category) {
      case "wentWell":
        break;
      case "toImprove":
        setState({
          ...state,
          wentWell: {
            ...state.wentWell,
            data: [...state.wentWell.data, state[category].data[cardIndex]],
          },
          [category]: {
            ...state[category],
            data: [
              ...state[category].data.filter((_, index) => index !== cardIndex),
            ],
          },
        });
        break;
      case "actionItems":
        setState({
          ...state,
          toImprove: {
            ...state.toImprove,
            data: [...state.toImprove.data, state[category].data[cardIndex]],
          },
          [category]: {
            ...state[category],
            data: [
              ...state[category].data.filter((_, index) => index !== cardIndex),
            ],
          },
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
          toImprove: {
            ...state.toImprove,
            data: [...state.toImprove.data, state[category].data[cardIndex]],
          },
          [category]: {
            ...state[category],
            data: [
              ...state[category].data.filter((_, index) => index !== cardIndex),
            ],
          },
        });
        break;
      case "toImprove":
        setState({
          ...state,
          actionItems: {
            ...state.actionItems,
            data: [...state.actionItems.data, state[category].data[cardIndex]],
          },
          [category]: {
            ...state[category],
            data: [
              ...state[category].data.filter((_, index) => index !== cardIndex),
            ],
          },
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
      [category]: {
        ...state[category],
        data: state[category].data.filter((_, index) => index !== cardIndex),
      },
    });
  };

  const dragItem = () => {};

  return {
    moveLeft,
    moveRight,
    dragItem,
    deleteItem,
    updateItem,
    incrementLikes,
  };
};

export default RetroCardControls;
