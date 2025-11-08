import { useEffect, useState } from "react";

function DictionaryAPI() {
    const [inputValue, setInputValue] = useState('');
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if (inputValue.trim()) {
            setWord(inputValue.trim());
        }
    }

    useEffect(() => {
        // Don't fetch if word is empty
        if (!word) return;

        const fetchDicAPI = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error('Word not found or API error');
                }

                const data = await response.json();
                console.log(data);
                
                // Extract definition from the response
                if (data[0]?.meanings[0]?.definitions[0]?.definition) {
                    setDefinition(data[0].meanings[0].definitions[0].definition);
                } else {
                    setDefinition('No definition found');
                }
            }
            catch(err) {
                setError(err.message);
                console.error('Error fetching word definition:', err);
            }
            finally {
                setLoading(false);
            }
        }
        
        fetchDicAPI();
    }, [word]); // Add word as dependency

    return(
        <>
            <div>
                <input 
                    type='text' 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a word..."
                />
                <button onClick={handleClick}>
                    {loading ? 'Searching...' : 'Translate'}
                </button>
            </div>
            
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            {definition && !loading && (
                <div>
                    <h3>Definition of "{word}":</h3>
                    <p>{definition}</p>
                </div>
            )}
        </>
    );
}

export default DictionaryAPI;