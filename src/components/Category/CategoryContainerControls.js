import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const CategoryContainerControls = () => {
  // const [state, setState] = useState({
  //     wentWell: [],
  //     toImprove: [],
  //     actionItems: [],
  // });
  const { state, setState } = useContext(StateContext);

  const addItem = (event, category, index) => {
    event.preventDefault();
    switch (category) {
      case "wentWell":
        setState({
          ...state,
          wentWell: state.wentWell.concat({
            textValue: "",
          }),
        });
        break;
      case "toImprove":
        setState({
          ...state,
          toImprove: state.toImprove.concat({
            textValue: "",
          }),
        });
        break;
      case "actionItems":
        setState({
          ...state,
          actionItems: state.actionItems.concat({
            textValue: "",
          }),
        });
        break;
      default:
        break;
    }
  };

  return {
    addItem,
    state,
  };
};

export default CategoryContainerControls;
