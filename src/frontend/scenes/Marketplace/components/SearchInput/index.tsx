import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input, InputContainer } from "./styles";

type SearchInputProps = {
  onChangeCallback: (value: string) => void;
};

export function SearchInput({
  onChangeCallback,
}: SearchInputProps): ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
    },
    [],
  );

  useEffect(() => {
    onChangeCallback(debouncedValue);
  }, [debouncedValue]);

  return (
    <InputContainer>
      <Input
        id="cityName"
        value={inputValue}
        placeholder="Type city name"
        onChange={onInputChange}
      />
    </InputContainer>
  );
}
