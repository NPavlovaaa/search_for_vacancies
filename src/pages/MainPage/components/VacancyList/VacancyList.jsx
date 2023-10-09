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
        <div>
            {vacancyList ? vacancyList.map(item => {
                return <ItemVacancyList {...item}/>
            }) :  null}
        </div>
    )
}
export default VacancyList;

