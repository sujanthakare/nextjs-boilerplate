import { useEffect, useState } from 'react';

/**
 * Sets a debounce on a specific callback
 * @param ms Time for debounde, in ms
 * @param callback The callback to debounce
 * @returns the debounced callback
 */
const useDebouncedCallback = (ms: number, callback: (s: string) => any) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      callback(value);
    }, ms);

    return () => clearTimeout(timerId);
  }, [value, ms, callback]);

  return setValue;
};

/**
 * Sets a debounce on a specific value
 * @param ms Time for debounce, in ms
 * @param value Value to debounce
 * @param sideEffect Possible side effect
 * @returns the ebounced value
 */
const useDebouncedValue = (
  ms: number,
  value: any,
  sideEffect?: (value: any) => void
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (sideEffect) {
      sideEffect(value);
    }
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);
    return () => {
      clearTimeout(handler);
    };
  }, [value, ms, sideEffect]);

  return debouncedValue;
};

export { useDebouncedCallback, useDebouncedValue };
