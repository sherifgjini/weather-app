import WeatherIcon from "public/icons/Weather";
import Styles from "./header.module.scss";
import Search from "./search";
import Login from "./signin";
import Link from "next/link";

const Header = () => {
  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logo}>
        <WeatherIcon />
        <b>Weather app</b>
      </Link>
      <Search />
      <Login />
    </header>
  );
};

export default Header;
