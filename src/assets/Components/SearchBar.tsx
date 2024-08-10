import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search a country..."
        className="px-4 w-96 py-2 border rounded"
      />
    </div>
  );
}
