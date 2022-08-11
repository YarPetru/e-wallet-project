import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import * as reduxActions from 'redux/actions';
import Title from 'components/Title';
import s from './Modal.module.scss';

const schema = yup.object().shape({
  amount: yup.number().required('Amount is a requred field'),
  currency: yup.string().required('You have to choose a currency'),
});

const initialValues = {
  amount: '',
  currency: '',
};

const Modal = ({ onClose }) => {
  // modal
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    e.code === 'Escape' && onClose();
  };

  const handleOverlayClick = e => {
    e.currentTarget === e.target && onClose();
  };

  // form

  const cash = useSelector(state => state.cash);
  console.log(cash);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(reduxActions.editCash(values.amount, values.currency));
    actions.resetForm();
    onClose();
  };

  return (
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>
        <Title title="Edit your cash" />
        <div className={s.formFieldsWrapper}>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <div className={s.fieldWrapper}>
                <Field
                  className={`${s.input} ${s.amountInput}`}
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                />
                <ErrorMessage
                  className={s.errorMessage}
                  name="amount"
                  component="div"
                />
              </div>
              <div className={s.fieldWrapper}>
                <Field
                  className={s.input}
                  as="select"
                  id="currency"
                  name="currency"
                >
                  <option className={s.option} value="">
                    Select a currency
                  </option>
                  <option className={s.option} value="UAH">
                    UAH
                  </option>
                  <option className={s.option} value="USD">
                    USD
                  </option>
                  <option className={s.option} value="EUR">
                    EUR
                  </option>
                </Field>
                <ErrorMessage
                  className={s.errorMessage}
                  name="currency"
                  component="div"
                />
              </div>

              <div className={s.buttonsWrapper}>
                <button className={s.formBtn} type="submit">
                  Save
                </button>
                <button
                  className={`${s.formBtn} ${s.cancelBtn}`}
                  type="reset"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
