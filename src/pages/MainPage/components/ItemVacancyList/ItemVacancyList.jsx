import {useState} from "react";
import InfoModalWindow from "../../../../components/InfoModalWindow";
import ModalWindow from "../../../../components/ModalWIndow";

const ItemVacancyList = ({item}) => {
    const [infoShowModal, setInfoShowModal] = useState(false);
    const [formShowModal, setFormShowModal] = useState(false);

    const isInfoShowModal = (bool: boolean) => {
        setInfoShowModal(bool);
    }
    const isFormShowModal = (bool: boolean) => {
        setFormShowModal(bool);
    }


    return(
        <>
            {formShowModal ? <ModalWindow formShowModal={formShowModal} setFormShowModal={isFormShowModal} item={item.jobName}/> : null}
            {infoShowModal ? <InfoModalWindow showModal={infoShowModal} isShowModal={isInfoShowModal} formShowModal={formShowModal} setFormShowModal={isFormShowModal} {...item}/> : null}
            <div className="card text-start mt-5">
                <div className="card-body float-left">
                    <h3 className="card-title float-left">{item.jobName}</h3>
                    <h3>{item.salary} {item.currency}</h3>
                    <button type="button" className="btn btn-primary" onClick={() => isInfoShowModal(true)}>Подробнее</button>
                </div>
            </div>
        </>
    )

}
export default ItemVacancyList;