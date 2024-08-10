import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Country } from "../types/country";
import CountryCard from "./Countries";
import SearchBar from "./SearchBar";
import { Regions } from "../types/regions.enum";

export default function RegionsPage() {
  const { region } = useParams<{ region: string }>();
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const isValidRegion = Object.values(Regions).includes(region as Regions);

  useEffect(() => {
    if (!isValidRegion) {
      navigate("/not-found");
      return;
    }

    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, [region, isValidRegion, navigate]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim().toLowerCase());
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4">
        These are the {region} Countries
      </h2>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}
