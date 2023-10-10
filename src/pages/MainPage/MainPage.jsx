import Slider from "../../components/Slider";
import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import For from "../../assets/three.png";


const MainPage = () => {
    const images = [One, Two, For]
    return(
        <div className="py-5">
            <div className="container">
                <Slider images={images}/>
            </div>
        </div>
    )
}
export default MainPage;