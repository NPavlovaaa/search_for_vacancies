import ItemVacancyList from "../ItemVacancyList";
import {useGetVacanciesQuery} from "../../../../api/apiSlice";
import {useMemo, useState} from "react";
import Pagination from "../../../../components/pagination/Pagination";

const VacancyList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {
        data = [],
        isLoading,
        isError
    } = useGetVacanciesQuery();

    const vacancyList = data.vacancies?.vacancy;

    let pageSize = 5;
    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return vacancyList?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, vacancyList]);

    return(
        <div className="container py-5">
            <div className="row">
                {currentData?.map(item => {
                    return (
                        <div className="col-12" key={item.url}>
                            <ItemVacancyList item={item}/>
                        </div>
                    )
                })}
            </div>
            <Pagination
                className="mt-5 justify-content-center"
                currentPage={currentPage}
                totalCount={vacancyList ? vacancyList?.length : 0}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>

    )
}
export default VacancyList;





