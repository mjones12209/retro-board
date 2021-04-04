import Title from './components/Title/Title';
import ToolBar from './components/ToolBar/ToolBar';
import CategoryContainer from './components/Category/CategoryContainer';

function App() {
  return (
    <>
      <Title>
        <ToolBar />
        <CategoryContainer />
      </Title>
    </>
  );
}

export default App;
