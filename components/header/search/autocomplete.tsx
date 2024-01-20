import { IGeoLocation } from "@/interfaces/IGeoLocation";
import Styles from "./search.module.scss";

interface AutocompleteProps {
  loading: boolean;
  data: IGeoLocation[];
}
const Autocomplete: React.FC<AutocompleteProps> = ({ loading, data }) => {
  return (
    <div data-testid="autocomplete" className={Styles.autocomplete}>
      {loading && <div data-testid="loading">Loading...</div>}
      {!loading &&
        data.map((city) => (
          <div key={city.lat} className={Styles.autocompleteItem}>
            <b>{city.name}</b>
            {` ${city.country} (${city.name}, ${city.country})`}
          </div>
        ))}
    </div>
  );
};

export default Autocomplete;
