import { Country } from "../types/country";
import "../../CountryCard.css";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const borderColor = country.landlocked
    ? "border-green-500"
    : "border-blue-500";

  return (
    <div
      className={`relative rounded-lg w-56 h-80 bg-white shadow-md flex items-center justify-center book ${borderColor}`}
    >
      {/* Main Cover */}
      <div className="absolute top-0 w-full h-full bg-white rounded-lg flex flex-col items-center justify-center cover">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-24 h-16 object-cover mb-2 rounded-t flag-image"
        />
        <h3 className="text-lg font-bold country-name">
          {country.name.common}
        </h3>
      </div>
      {/* Hidden Info (shown on hover) */}
      <div className="absolute top-0 w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-4 info">
        <p className="text-black">
          <strong>Capital:</strong> {country.capital?.join(", ")}
        </p>
        <p className="text-black">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-black">
          <strong>Area:</strong> {country.area} km²
        </p>
        <p className="text-black">
          <strong>Population:</strong> {country.population}
        </p>
        <p className="text-black">
          <strong>Landlocked:</strong> {country.landlocked ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
