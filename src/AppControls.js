import { useContext } from "react";
import { StateContext } from "./contexts/StateContext";

const AppControls = () => {
  const { state, setState } = useContext(StateContext);

  const reOrder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      if (destination.index === source.index) {
        return;
      }

      const dataList = reOrder(
        state[source.droppableId].data,
        source.index,
        destination.index
      );

      const updateState = {
        ...state,
        [source.droppableId]: {
          ...state[source.droppableId],
          data: dataList,
        },
      };

      setState(updateState);
    } else {
      const startColumn = [...state[source.droppableId].data];
      const finishColumn = [...state[destination.droppableId].data];
      const [removed] = startColumn.splice(source.index, 1);
      finishColumn.splice(destination.index, 0, removed);

      setState({
        ...state,
        [source.droppableId]: {
          ...state[source.droppableId],
          data: startColumn,
        },
        [destination.droppableId]: {
          ...state[destination.droppableId],
          data: finishColumn,
        },
      });
    }
  };

  return {
    onDragEnd,
  };
};

export default AppControls;
