import classes from './PageBtn.module.css';
import useCustomSearchParams from '../../../../../hooks/useCustomSearchParams';

const PageBtn = ({ number, current }) => {
  const { setNewSearchParams } = useCustomSearchParams();

  // Функции
  function handlePageChange(page) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    setNewSearchParams({ page });
  }
  // Функции END

  return (
    <li
      onClick={() => handlePageChange(number)}
      // Если страница активная - добавляем вспомогательные класс .page_active
      className={current ? [classes.page, classes.page_active].join(' ') : classes.page}>
      <span>{number}</span>
    </li>
  );
};

export default PageBtn;