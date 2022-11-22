export default function createFilteredPostsByID(array, postsPerPage) { // Создаю "страницы" в новом обработанном массиве
  // Создаю вспомогательный массив
  let postsByPages = [];

  // Если кол-во коллекций конкретной категории, деленных на postsPerPage >, чем одна == страниц больше, чем одна
  if (array.length / postsPerPage > 1) {
    // Перебираю весь массив
    for (let i = 0; i < array.length; i++) {
      // Если коллекция должна быть на след. странице
      if ((i / postsPerPage) === Math.ceil(i / postsPerPage)) {
        // Создаём новую страницу и добавляем её туда
        postsByPages.push([array[i]]);
      }
      // Иначе
      else {
        // Добавляем её в массив конкретной страницы
        postsByPages[postsByPages.length - 1].push(array[i]);
      }
    }
    // Обновляем отсортированный по старницам массив в объекте всех коллекций
    return postsByPages;
  } else { // Если страница только одна
    return [array];
  }
}