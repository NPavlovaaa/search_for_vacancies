import Search from "../MainPage/components/Filters/Search";
import FilterSalary from "../MainPage/components/Filters/FilterSalary";
import VacancyList from "../MainPage/components/VacancyList";


const VacancyListPage = () => {
    return(
        <div className="py-5 container-fluid flex-row">
            <div className="row gx-5">
                <div className="col-3">
                    <FilterSalary/>
                </div>
                <div className="col-9">
                    <Search/>
                    <VacancyList/>
                </div>
            </div>

        </div>
    )
}
export default VacancyListPage;