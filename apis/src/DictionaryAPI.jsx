// https://www.freepublicapis.com/free-dictionary-api-2

import { useEffect, useState } from "react";

function DictionaryAPI() {
    const [inputValue, setInputValue] = useState('');
    const [word, setWord] = useState('');
    const [translate, setTranslate] = useState('');

    const handleClick = () =>
    {
        setWord(inputValue);
    }

    useEffect(() => {
        const fetchDicAPI = async () => {
            try
            {
                const API_URL = 'https://freedictionaryapi.com/api/v1/entries/en/';

                const response = await fetch(API_URL/{word});

                if(!response.ok)
                {
                    throw new Error('Error in fetch');
                }

                const data = await response.json();

                console.log(data);
            }
            catch
            {

            }
            finally
            {

            }
        }
        fetchDicAPI();
    }, []);

    return(
        <>
            <div>
                <input type='text' onChange={(e) => setInputValue(e.target.value)}></input>
                <button onClick={handleClick}>Translate</button>
            </div>
        </>
    );
}

export default DictionaryAPI;