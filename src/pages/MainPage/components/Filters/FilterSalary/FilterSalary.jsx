import {useDispatch, useSelector} from "react-redux";
import {activeSalaryChange} from "../FiltersSlice";


const FilterSalary = () => {
    const dispatch = useDispatch();
    const {activeSalary} = useSelector(state => state.getFilters);

    const onFilter = (value) => {
        dispatch(activeSalaryChange(value))
    }

    return(
        <div className="text-start bg-white border-0 shadow-lg rounded-2 px-4 py-3">
            <h5>Уровень дохода</h5>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="none" id="none"
                       onChange={(e) => onFilter(e.target.name)}
                       checked={activeSalary === 'none'}
                />
                    <label className="form-check-label" htmlFor="none">
                        Не имеет значения
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="forty" id="forty"
                       onChange={(e) => onFilter(e.target.name)}
                       checked={activeSalary === 'forty'}
                />
                    <label className="form-check-label" htmlFor="forty">
                        от 40 000 руб
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="eighty" id="eighty"
                       onChange={(e) => onFilter(e.target.name)}
                       checked={activeSalary === 'eighty'}
                />
                <label className="form-check-label" htmlFor="eighty">
                    от 80 000 руб
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="oneHundred" id="oneHundred"
                       onChange={(e) => {
                           onFilter(e.target.name);
                       }}
                       checked={activeSalary === 'oneHundred'}
                />
                <label className="form-check-label" htmlFor="oneHundred">
                    от 100 000 руб
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="indicated" id="indicated"
                       onChange={(e) => {
                           onFilter(e.target.name);
                       }}
                       checked={activeSalary === 'indicated'}
                />
                <label className="form-check-label" htmlFor="indicated">
                    Указан доход
                </label>
            </div>
        </div>
    )
}
export default FilterSalary;