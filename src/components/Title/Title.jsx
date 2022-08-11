import PropTypes from 'prop-types';
import s from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={s.titleWrapper}>
      <p className={s.title}>{title}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
