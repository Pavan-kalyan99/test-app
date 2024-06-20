import React, { useEffect, useState } from 'react'

const useCustomDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounceValue(value);

        }, delay);
        return () => {
            clearTimeout(handle);
        }

    }, [])
    return debounceValue;
}

export default useCustomDebounce
