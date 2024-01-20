import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  ChangeEvent,
} from "react";
import Input from "@/components/input/index";
import Styles from "./search.module.scss";
import Link from "next/link";
import { getGeoLocation } from "@/services/getGeoLocation.service";
import { IGeoLocation } from "@/interfaces/IGeoLocation";
import Autocomplete from "./autocomplete";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [autocompleteData, setAutocompleteData] = useState<IGeoLocation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const geoRes = await getGeoLocation(searchTerm);
      setAutocompleteData(geoRes);
    } catch (error) {
      console.error("Error trying to get data: ", error);
      setAutocompleteData([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      fetchData();
    } else {
      setAutocompleteData([]);
    }
  }, [searchTerm, fetchData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={Styles.search}>
      <Input
        border={false}
        placeholder="Search City..."
        onChange={handleInputChange}
        data-testid="input-search"
      />
      <div data-testid="cities" className={Styles.cities}>
        <Link data-testid="city-link" href={"/city/Berlin"}>
          Berlin
        </Link>{" "}
        <Link data-testid="city-link" href={"/city/Berlin"}>
          Berlin
        </Link>
      </div>
      <Autocomplete loading={loading} data={autocompleteData} />
    </div>
  );
};

export default memo(Search);
