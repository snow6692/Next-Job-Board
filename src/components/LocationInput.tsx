import React, { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { citiesList } from "@/lib/cities";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}

export default forwardRef<HTMLInputElement, IProps>(function LocationInput(
  { onLocationSelected, ...props },
  ref,
) {
  const [locationSearchInput, setLocationSearchInput] = useState("");
  const [isFocus, setIsFocused] = useState(false);

  const cities = useMemo(() => {
    if (!locationSearchInput.trim()) return [];

    const searchWords = locationSearchInput.split(" ");

    return citiesList
      .map((item) => `${item.city}, ${item.governorate}, Egypt`)
      .filter(
        (city) =>
          city.toLowerCase().includes(searchWords[0].toLowerCase()) &&
          searchWords.every((word) =>
            city.toLowerCase().includes(word.toLowerCase()),
          ),
      )
      .slice(0, 5);
  }, [locationSearchInput]);

  return (
    <div className="relative">
      <Input
        {...props}
        type="search"
        ref={ref}
        value={locationSearchInput}
        placeholder="Search for a city"
        onChange={(e) => setLocationSearchInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div>
        {locationSearchInput.trim() && isFocus && (
          <div className="absolute z-20 mt-4 divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
            {!cities.length && <p className="p-3">No results found</p>}
            {cities.map((city) => (
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  onLocationSelected(city);
                  setLocationSearchInput("");
                }}
                className="block w-full p-2 text-start"
                key={city}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
