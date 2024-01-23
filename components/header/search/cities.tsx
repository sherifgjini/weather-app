import Link from "next/link";
import Styles from "./search.module.scss";

const Cities = () => {
  return (
    <div data-testid="cities" className={Styles.cities}>
      <Link data-testid="city-link" href={"/city/Berlin"}>
        Berlin
      </Link>{" "}
      <Link data-testid="city-link" href={"/city/Berlin"}>
        Berlin
      </Link>
    </div>
  );
};

export default Cities;
