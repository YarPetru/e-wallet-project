import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import Title from 'components/Title';
import * as reduxActions from 'redux/actions';
import s from './NewCardForm.module.scss';

yup.addMethod(yup.string, 'integer', function () {
  return this.matches(/^\d+$/, 'The field should have digits only');
});

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .integer()
    .length(16)
    .required('Card number is a requred field'),
  expiry: yup.string().required('Expiry is a requred field'),
  cvv: yup.string().integer().length(3).required('CVV is a requred field'),
  cardHolder: yup.string(),
  amount: yup.number().required('Amount is a requred field'),
  currency: yup.string().required('You have to choose a currency'),
});

const initialValues = {
  cardNumber: '',
  expiry: '',
  cvv: '',
  cardHolder: '',
  amount: '',
  currency: '',
};

const NewCardForm = () => {
  const cards = useSelector(state => state.cards);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const currentNumbers = cards.map(card => card.cardNumber);

    currentNumbers.includes(values.cardNumber) &&
      alert('You already have card with the same number');

    !currentNumbers.includes(values.cardNumber) &&
      dispatch(
        reduxActions.addCard(
          values.amount,
          values.cardHolder,
          values.cardNumber,
          values.currency,
          values.cvv,
          values.expiry
        )
      );
    console.log(values, actions);
    actions.resetForm();
  };

  return (
    <>
      <Title title="Adding Cards" />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <Field
              className={`${s.input} ${s.cardNumberInput}`}
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="cardNumber"
              component="div"
            />
          </div>

          <div className={s.fieldWrapper}>
            <Field
              className={`${s.input} ${s.expiryInput}`}
              id="expire"
              name="expiry"
              type="month"
              min="2022-09"
              max="2030-12"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="expiry"
              component="div"
            />
          </div>

          <div className={s.fieldWrapper}>
            <Field
              className={`${s.input} ${s.cvvInput}`}
              id="cvv"
              name="cvv"
              placeholder="CVV"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="cvv"
              component="div"
            />
          </div>

          <div className={s.fieldWrapper}>
            <Field
              className={`${s.input} ${s.cardHolderInput}`}
              id="cardHolder"
              name="cardHolder"
              placeholder="Card Holder Name"
            />
          </div>

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
              Add Card
            </button>
            <button className={`${s.formBtn} ${s.cancelBtn}`} type="reset">
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default NewCardForm;
