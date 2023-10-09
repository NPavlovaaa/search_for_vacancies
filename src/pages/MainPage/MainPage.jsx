import VacancyList from "./components/VacancyList";
import Slider from "../../components/Slider";
import One from "../../assets/one.jpg";
import Two from "../../assets/two.jpg";
import For from "../../assets/for.jpg";
const MainPage = () => {
    const images = [One, Two, For]
    return(
        <div className="py-5">
            <div className="container">
                <Slider images={images}/>
            </div>
            <VacancyList/>

        </div>
    )
}
export default MainPage;