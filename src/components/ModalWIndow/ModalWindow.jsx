import React, {useState} from "react";
import formik, {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import styles from "./ModalWindow.module.scss";


const ModalWindow = ({formShowModal, setFormShowModal, item}) => {
    const [currShowModal, setShowModal] = useState(formShowModal);

    const sending = (values: any) => {
        setShowModal(false);
        setFormShowModal(false);
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    return (
        <>
            {currShowModal ?
                <>
                    <Formik
                        enableReinitialize
                        validateOnMount
                        initialValues={{
                            fio: '',
                            email: '',
                            phone: '',
                        }}
                        validationSchema={Yup.object({
                            fio: Yup.string().required('Required')
                                .required('Обязательное поле!'),
                            email: Yup.string()
                                .email('Неправильный формат email').required('Required')
                                .required('Обязательное поле!'),
                            phone: Yup.string()
                                .matches(phoneRegExp, 'Неправильный формат')
                        })}

                        onSubmit = {(values, {resetForm}) => {

                            sending(values);
                            resetForm();
                        }}
                    >
                        <div className={styles.modal}>
                            <div className={styles.modal__main}>
                                <h3>Отклик на вакансию {item}</h3>
                                <Form method="POST">
                                    <div className={styles.modal__form}>
                                        <div>
                                            <Field
                                                type="text"
                                                name="fio"
                                                className={styles.modal__form__input}
                                                id="fio"
                                                placeholder="Введите ФИО"
                                                autoComplete="off"/>
                                        </div>
                                        <ErrorMessage component="div" className={styles.error} name="fio"/>
                                        <div className="">
                                            <Field
                                                type="email"
                                                name="email"
                                                className={styles.modal__form__input}
                                                id="email"
                                                placeholder="Введите почту"
                                                autoComplete="off"/>
                                        </div>
                                        <ErrorMessage component="div" className={styles.error} name="email"/>
                                        <div className="">
                                            <Field
                                                type="phone"
                                                name="phone"
                                                className={styles.modal__form__input}
                                                id="phone"
                                                placeholder="Введите номер телефона"
                                                autoComplete="off"/>
                                        </div>
                                        <ErrorMessage component="div" className={styles.error} name="phone"/>
                                        <button type="submit"
                                                className="btn btn-secondary mt-2"
                                                onClick={() => {
                                                    setShowModal(false)
                                                    setFormShowModal(false)
                                                }}>Закрыть</button>
                                        <button type="submit" disabled={!formik.isValid} className="btn btn-primary mt-2 mx-2">
                                            Отправить
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Formik>
                    <div className={styles.modal__background}></div>
                </> : null}
        </>
    )
}
export default ModalWindow;