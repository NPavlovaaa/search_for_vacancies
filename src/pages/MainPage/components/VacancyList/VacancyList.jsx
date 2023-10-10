import ItemVacancyList from "../ItemVacancyList";
import {useGetVacanciesQuery} from "../../../../api/apiSlice";
import {useMemo, useState} from "react";
import Pagination from "../../../../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import SetFormat from "./SetFormat";

const VacancyList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {activeSearch, activeSalary} = useSelector(state => state.getFilters);
    const {data = []} = useGetVacanciesQuery();

    const vacancyList = data.vacancies?.vacancy;

    const searchedVacancies = useMemo(() => {
        const searchedVacancies = vacancyList?.slice();
        if(activeSearch === ''){
            return searchedVacancies
        } else{
            return searchedVacancies.filter(item => item.jobName.toLowerCase().includes(activeSearch.toLowerCase()))
        }
    }, [vacancyList, activeSearch])

    const filteredVacancies = useMemo(() => {
        const filteredVacancies = searchedVacancies?.slice();
        if(activeSalary === 'none'){
            return filteredVacancies
        } else if(activeSalary === 'indicated'){
            return  filteredVacancies.filter(item => !isNaN(parseInt(item.salary[0])))
        }
        else{
            return filteredVacancies.filter(item => Number(item.salary.split('-')[0]) >= SetFormat(activeSalary))
        }
    }, [searchedVacancies, activeSalary])

    let pageSize = 5;
    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return filteredVacancies?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredVacancies]);

    return(
        <div className="container py-5 px-0 mx-0">
            <h1 className="text-start">Вакансии</h1>
            <div className="row">
                {currentData?.length > 0 ? currentData?.map(item => {
                    return (
                        <div className="col-12" key={item.url}>
                            <ItemVacancyList item={item}/>
                        </div>
                    )
                }) : <div className="container">Вакансий с такими параметрами пока нет</div>}
            </div>
            <Pagination
                className="mt-5 justify-content-center"
                currentPage={currentPage}
                totalCount={filteredVacancies ? filteredVacancies?.length : 0}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>

    )
}
export default VacancyList;





