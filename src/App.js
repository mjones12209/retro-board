import Title from './components/Title/Title';
import ToolBar from './components/ToolBar/ToolBar';
import CategoryContainer from './components/Category/CategoryContainer';
import StateContextProvder from "./contexts/StateContext";

function App() {
  return (
    <>
      <Title>
        <ToolBar />
        <StateContextProvder>
          <CategoryContainer />
        </StateContextProvder>
      </Title>
    </>
  );
}

export default App;
