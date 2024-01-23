import Link from "next/link";
import Styles from "./search.module.scss";

const Cities = () => {
  return (
    //Coordinates are static
    <div data-testid="cities" className={Styles.cities}>
      <Link data-testid="city-link" href={"/city/35.6828387_139.7594549"}>
        Tokyo
      </Link>{" "}
      <Link data-testid="city-link" href={"/city/39.6852874_-93.9268836"}>
        NY
      </Link>
      <Link data-testid="city-link" href={"/city/46.9482713_7.4514512"}>
        Bern
      </Link>
    </div>
  );
};

export default Cities;
