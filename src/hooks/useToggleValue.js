import { useState } from "react";

export default function useToggleValue() {
  const [value, setValue] = useState(false);

  const handleToggleValue = () => {
    setValue(!value);
  };

  return {
    value,
    handleToggleValue,
    setValue,
  };
}
