"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  ChangeEvent,
} from "react";
import Input from "@/components/input/index";
import Styles from "./search.module.scss";
import { getGeoLocation } from "@/services/getGeoLocation.service";
import { IGeoLocation } from "@/interfaces/IGeoLocation";
import dynamic from "next/dynamic";
const Autocomplete = dynamic(() => import("./autocomplete"));
const Cities = dynamic(() => import("./cities"));

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [autocompleteData, setAutocompleteData] = useState<IGeoLocation[]>(
    [] as IGeoLocation[]
  );
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
      <Cities />
      {searchTerm ? (
        <Autocomplete
          loading={loading}
          data={autocompleteData}
          setAutocompleteData={setAutocompleteData}
        />
      ) : null}
    </div>
  );
};

export default memo(Search);
