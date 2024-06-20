import React, { useEffect, useState } from 'react'
import useCustomDebounce from './useCustomDebounce';
import axios from 'axios';
const MainDebounce = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const delaySearchTerm = useCustomDebounce(searchTerm, 200);

    useEffect(() => {
        if (delaySearchTerm) {
            console.log("delay term ...::", delaySearchTerm);
            fetcApi();
        }
        else {
            console.log('something else..')
            fetcApi();
        }
    }, [delaySearchTerm])

    const fetcApi = async () => {
        try {

            //const result = axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);

            console.log("result is");
            console.log("result is ::", result)

            //  console.log("result is ::", result.data)

        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <h1>Debounce</h1>
            <div>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='search term ...' />
            </div>

            <h1>Your search term: {searchTerm}</h1>


        </>


    )
}

export default MainDebounce
