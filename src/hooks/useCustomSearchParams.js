import { useSearchParams } from "react-router-dom";

export default function useCustomSearchParams() {
  let [params, setNewParams] = useSearchParams(); // Получаю через дефолтный хук
  let currentSearchParams = {}; // Создаю вспомогательный объект

  // Преобразовываю параметры поиска в цельный объект
  params.forEach((value, key) => {
    currentSearchParams[key] = value;
  });
  // Преобразовываю параметры поиска в цельный объект END


  function setNewSearchParams(valuesObject) {

    for (let i = 0; i < Object.keys(valuesObject).length; i++) {
      // Получаем текущий параметр
      let currentKeyOfValuesObject = Object.keys(valuesObject)[i];
      if (currentSearchParams[currentKeyOfValuesObject]) { // Если параметр существует
        // Устанавливаем новое значение параметра
        currentSearchParams[currentKeyOfValuesObject] = valuesObject[currentKeyOfValuesObject];
      }
    }

    setNewParams(currentSearchParams);
  }

  return { currentSearchParams, setNewSearchParams };
}