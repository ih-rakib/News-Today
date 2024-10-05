import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterCategoryProps {
  onCategory: (category: string) => void;
}

const FilterCategory = ({ onCategory }: FilterCategoryProps) => {
  const categories = ["all", "tech", "health", "sports", "business"];

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start justify-start">
      <h3 className="font-semibold text-lg">Categories:</h3>
      <div className="w-full sm:w-auto">
        <Select onValueChange={(val) => onCategory(val === "all" ? "" : val)}>
          <SelectTrigger className="border rounded-md w-full">
            <SelectValue placeholder="Select a Category" />
          </SelectTrigger>
          <SelectContent className="flex flex-col">
            {categories.map((category) => (
              <SelectItem
                value={category}
                key={category}
                className="capitalize"
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterCategory;
