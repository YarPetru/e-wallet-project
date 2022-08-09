import s from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={s.titleWrapper}>
      <p className={s.title}>{title}</p>
    </div>
  );
};

export default Title;
