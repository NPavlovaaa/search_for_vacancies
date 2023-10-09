const Slider = ({images}) => (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            {images ? images.map((item) => (
                <div className="carousel-item active" key={item}>
                    <img src={item} className="d-block w-100" alt="slide image"/>
                </div>
            )): null}
        </div>
    </div>
)
export default Slider