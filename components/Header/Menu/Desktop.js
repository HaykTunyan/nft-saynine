import classNames from "classnames";
import Link from "next/link";

const classes = {
  menu: "flex space-x-8 text-white",
  menuItem: "hover:text-primary text-white text-3xl",
  menuItemActive: "text-white",
};

const Desktop = ({ items, asPath }) => {
  return (
    <ul className={classes.menu}>
      {items.map((item) => {
        const isActive = asPath === item.path;
        return (
          <li
            key={item.path}
            className={classNames(classes.menuItem, {
              [classes.menuItemActive]: isActive,
            })}
          >
            <Link className='text-white' href={item.path}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Desktop;
