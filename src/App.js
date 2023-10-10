import './App.css';
import MainPage from "./pages/MainPage";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import VacancyListPage from "./pages/VacancyListPage";

function App() {
  return (
    <div>
        <Header/>
        <div className="body">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/vacancies" element={<VacancyListPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
