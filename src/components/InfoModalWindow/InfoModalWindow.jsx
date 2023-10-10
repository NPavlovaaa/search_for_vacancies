import React, {useState} from "react";
import {useEffect, useRef} from "react";
import styles from "./InfoModalWindow.module.scss";


const InfoModalWindow = ({isShowModal, showModal, setFormShowModal, ...item}) => {
    const [currShowModal, setShowModal] = useState(showModal);

    const onLogin = () => {
        setShowModal(false);
        setFormShowModal(true);
    }
    const containerDescription = useRef(null);
    const containerCompany = useRef(null);
    useEffect(() => {
        if (containerDescription.current) {
            containerDescription.current.innerHTML = item?.description;
        }
        if (containerCompany.current) {
            containerCompany.current.innerHTML = item?.company.name;
        }
    }, []);

    return (
        <>
            {currShowModal ?
                <div className={styles.modal}>
                    <div className={styles.modal__main}>
                        <h3 className="">{item?.jobName} ({item?.salary} {item?.currency})</h3>
                        <div ref={containerCompany}>{item?.company.name}</div>
                        <div>
                            <div ref={containerDescription}></div>
                            <div>
                                <p className="fw-bold mb-0 mt-2">Доп. требования:</p>
                                <ul>
                                    <li>Образование: {item?.requirement.education}</li>
                                    <li>Опыт работы: {item?.requirement.experience}</li>
                                </ul>
                            </div>
                            <p>Адрес: {item?.address.location}</p>
                            <div>Вакансия опубликована {item?.creationDate}</div>
                        </div>
                        <div className="mt-2">
                            <button type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setShowModal(false)
                                        isShowModal(false)
                                    }}>Закрыть</button>
                            <button type="button" className="btn btn-primary mx-2" onClick={onLogin}>Откликнуться</button>
                        </div>
                    </div>
                    <div className={styles.modal__background}></div>
                </div> : null}
        </>
    )
}
export default InfoModalWindow;