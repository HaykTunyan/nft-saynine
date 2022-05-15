import classNames from "classnames";

function Container({ children, className }) {
  return (
    <div
      children={children}
      className={classNames(
        "2xl:max-w-screen-2xl 2xl:mx-auto xl:mx-10 2 lg:mx-8 md:mx-6 mx-3",
        className
      )}
    />
  );
}

export default Container;
