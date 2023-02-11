import Introduction from "./components/Introduction";
import List from "./components/List";
import './index.css'

function App() {
  return (
    <div className="App">
      <div className="title">Заметки !</div>
      <div className="main">
        <div>
          <Introduction />
        </div>
        <div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
