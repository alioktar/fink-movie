import "./App.css";
import Header from "./components/header/Header";
import Poster from "./components/poster/Poster";
import Owerview from "./components/owerview/Owerview";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Poster  />
        <Owerview />
      </main>
    </div>
  );
}

export default App;
