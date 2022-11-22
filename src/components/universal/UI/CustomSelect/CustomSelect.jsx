import { useRef } from 'react';
import classes from './CustomSelect.module.css';
import { useDispatch } from 'react-redux'
import { toggleAllPosts } from '../../../../store/reducers/renderParamsReducer';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams';

const CustomSelect = () => {
  const dispatch = useDispatch();
  const listRef = useRef(null);
  const firstOptionRef = useRef(null);
  
  const { setNewSearchParams } = useCustomSearchParams();

  // Функции
  function handleMenuClick(currentTarget) {
    const list = listRef.current;

    if (list.dataset.opened === "false") { // Если меню закрыто
      list.dataset.opened = "true";
      list.classList.add('options_opened');
    }

    else { // Иначе, если меню открыто
      list.dataset.opened = "false";
      firstOptionRef.current.innerHTML = currentTarget.innerHTML;

      if (currentTarget.dataset.value && currentTarget.dataset.value === "all") {
        dispatch(toggleAllPosts(true));
        setNewSearchParams({ page: 1 });
      }
      else if (currentTarget.dataset.value && currentTarget.dataset.value === "several") {
        dispatch(toggleAllPosts(false));
      }
    }


  }
  // Функции END

  return (
    <ul className={classes.options} ref={listRef} data-opened={false} onClick={(e) => { handleMenuClick(e.target) }}>
      <li className={[classes.option, classes.option_default].join(' ')} ref={firstOptionRef}>Выберите настройку...</li>
      <li data-value="all" className={classes.option}>Показать все посты</li>
      <li data-value="several" className={classes.option}>Показывать ограниченное кол-во постов</li>
    </ul>
  );
};

export default CustomSelect;