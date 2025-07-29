import React from "react";
import { Icon } from "@iconify/react";

interface SearchInputProps {
  id: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput = ({
  id,
  name,
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type="search"
        placeholder={placeholder}
        value={value}
        inputMode="search"
        aria-labelledby={id}
        onChange={onChange}
        className={`
                h-[44px] pl-[24px] pr-4
                text-sm min-w-[208px] outline-0 border-[1.5px] border-black font-medium placeholder:font-semibold placeholder:text-[#A1A1A1]
                rounded
                `}
      />
      <Icon
        icon="ph:magnifying-glass"
        className="absolute top-1/2 left-[175px] transform -translate-y-1/2 text-black"
        height={20}
        width={20}
      />
    </div>
  );
};

export default SearchInput;
