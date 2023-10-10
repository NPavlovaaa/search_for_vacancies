import {useState} from "react";
import {useDispatch} from "react-redux";
import {activeSearchChange} from "../FiltersSlice";

const Search = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSearch = () => {
        dispatch(activeSearchChange(value))
    }

    return(
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Введите название вакансии" aria-label="Search"
                   aria-describedby="search-addon"
                   onChange={(e) => setValue(e.target.value)}
            />
            <button type="button"
                    className="btn btn-outline-primary"
                    onClick={onSearch}
            >Поиск</button>
        </div>
    )
}
export default Search;