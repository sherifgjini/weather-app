import WeatherIcon from "public/icons/Weather";
import Styles from "./header.module.scss";
import Search from "./search";
import Login from "./signin";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <WeatherIcon />
        <b>Weather app</b>
      </div>
      <Search />
      <Login />
    </header>
  );
};

export default Header;
