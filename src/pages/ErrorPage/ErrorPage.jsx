import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={classes.wrapper}>
      <strong className={classes.title}>Произошла какая-то ОЧЕНЬ странная ошибка.</strong>
      <p className={classes.text}>Если Вы обычный пользователь, то просим вас пройти по <a href={"/posts/?page=1"} className={"link-w-underline"}>ссылке</a> на начальную страницу.</p>
      <p className={classes.text}>Если Вы - программист этого сайта, то почему мы видим эту страничку, м?</p>
    </div>
  );
};

export default ErrorPage;