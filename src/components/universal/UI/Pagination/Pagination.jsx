// Компоненты
import PageBtn from '../PageBtn/PageBtn';
// Классы
import classes from './Pagination.module.css';

const Pagination = ({ numbersOfPages, page }) => {
  // Функции
  function createPagesArray(numbersOfPages) {
    let pagesList = []; // Создаю вспомогательный массив

    for (let i = 0; i < numbersOfPages; i++) {

      if (i + 1 === Number(page)) // Если страница - активная
        pagesList.push(<PageBtn key={i} number={i + 1} current={true} />); // Добавляю текущую (активную) страницу в массив

      else  // Добавляю текущую (неактивную) страницу в массив
        pagesList.push(<PageBtn key={i} number={i + 1} current={false} />);
    }

    return pagesList;
  }
  // Функции END


  return (
    <ul className={classes.list}>
      {createPagesArray(numbersOfPages)}
    </ul>
  );
};

export default Pagination;