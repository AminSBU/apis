import { useState, useEffect } from "react";

function AdviceAPI() {
    const [advice, setAdvice] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const API_KEY = '47/9xgXbTofxC8Bbhndayg==mlz7vxlxrrnD8j6Q';
                const API_URL = 'https://api.api-ninjas.com/v1/advice';
                
                const response = await fetch(API_URL, {
                    headers: {
                        'X-Api-Key': API_KEY
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status}`);
                }
                
                const data = await response.json();
                setAdvice(data.advice); // Assuming the response has an 'advice' property
                console.log(data); // Log inside try block where data is defined
                
            } catch (err) {
                setError(err.message);
                console.error('Error fetching advice:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading advice...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Advice of the Day</h2>
            <p>{advice}</p>
        </div>
    );
}

export default AdviceAPI;