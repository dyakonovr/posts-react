import classes from './PageBtn.module.css';
import { Link } from 'react-router-dom';

const PageBtn = ({ number, current }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Link
      to={`/${number}`}
      onClick={scrollToTop}
      // Если страница активная - добавляем вспомогательные класс .page_active
      className={current ? [classes.page, classes.page_active].join(' ') : classes.page}>
      <span>{number}</span>
    </Link>
  );
};

export default PageBtn;