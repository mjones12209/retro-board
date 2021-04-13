import Title from "./components/Title/Title";
import ToolBar from "./components/ToolBar/ToolBar";
import CategoryContainer from "./components/Category/CategoryContainer";
import { DragDropContext } from "react-beautiful-dnd";
import AppControls from "./AppControls";

function App() {
  const { onDragEnd } = AppControls();

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Title>
          <ToolBar />
          <CategoryContainer />
        </Title>
      </DragDropContext>
    </>
  );
}

export default App;
