"use client";
import { IGeoLocation } from "@/interfaces/IGeoLocation";
import Styles from "./search.module.scss";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface AutocompleteProps {
  loading: boolean;
  data: IGeoLocation[];
  setAutocompleteData: React.Dispatch<React.SetStateAction<IGeoLocation[]>>;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  loading,
  data,
  setAutocompleteData,
}) => {
  const router = useRouter();

  const changeRoute = useCallback(
    (lat: number, lon: number) => {
      router.push(`/city/${lat}_${lon}`);
      setAutocompleteData([]);
    },
    [router, setAutocompleteData]
  );

  return (
    <ul data-testid="autocomplete" className={Styles.autocomplete}>
      {!loading &&
        data.map((city) => (
          <li
            key={city.lat}
            className={Styles.autocompleteItem}
            onClick={() => changeRoute(city.lat, city.lon)}
          >
            <b>{city.name}</b>
            {` ${city.country} (${city.name}, ${city.country})`}
          </li>
        ))}
    </ul>
  );
};

export default Autocomplete;
