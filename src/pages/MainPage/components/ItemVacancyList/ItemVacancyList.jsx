import {useEffect, useRef} from "react";

const ItemVacancyList = ({...item}) => {

    console.log('item', item)

    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = item.description;
        }
    }, []);

    return(
        <div>
            <div ref={containerRef} />;
        </div>
    )

}
export default ItemVacancyList;
