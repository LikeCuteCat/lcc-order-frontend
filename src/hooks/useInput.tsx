import React, { useState, useCallback, ChangeEvent } from 'react';

type hooReturnValue = [string | null, (e: ChangeEvent<HTMLInputElement>) => void];

function useInput(initialValue: string | null = null): hooReturnValue {
  const [value, setValue] = useState(initialValue);
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, changeHandler];
}

export default useInput;
