import './App.css';
import MainPage from "./pages/MainPage";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </div>
  );
}

export default App;