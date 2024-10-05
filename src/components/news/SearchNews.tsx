import React from "react";
import { Input } from "../ui/input";

interface SearchNewsProps {
  onSearch: (searchTerms: string) => void;
}

const SearchNews = ({ onSearch }: SearchNewsProps) => {
  return (
    <div className="mb-4 md:w-3/4">
      <h3 className="font-semibold text-lg mb-2">Search News</h3>
      <Input
        type="text"
        placeholder="Search News"
        className="p-2 border rounded-md w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchNews;
