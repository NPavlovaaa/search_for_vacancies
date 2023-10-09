import ItemVacancyList from "../ItemVacancyList";
import {useGetVacanciesQuery} from "../../../../api/apiSlice";

const VacancyList = () => {

    const {
        data = [],
        isLoading,
        isError
    } = useGetVacanciesQuery();

    const vacancyList = data.vacancies?.vacancy;


    return(
        <div className="container">

            <div className="row">
                {vacancyList ? vacancyList.map(item => {
                    return (
                        <div className="col-12" key={item.url}>
                            <ItemVacancyList item={item}/>
                        </div>
                    )
                }) :  null}
            </div>
        </div>

    )
}
export default VacancyList;





