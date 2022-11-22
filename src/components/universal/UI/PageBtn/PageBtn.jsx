// Хуки
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams';
// Функции
import scrollToTop from '../../../../functions/scrollToTop';
// Классы
import classes from './PageBtn.module.css';

const PageBtn = ({ number, current }) => {
  const { setNewSearchParams } = useCustomSearchParams();

  // Функции
  function handlePageChange(page) {
    scrollToTop();
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