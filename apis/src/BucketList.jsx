import { useState, useEffect } from "react";

function BucketListAPI() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchapiData = async () => {
            try
            {
                const API_URL = 'https://api.api-ninjas.com/v1/bucketlist';
                const API_KEY = '47/9xgXbTofxC8Bbhndayg==mlz7vxlxrrnD8j6Q';

                const response = await fetch(API_URL, {
                    headers: {
                        'X-Api-Key': API_KEY
                    }
                });
                
                if(!response.ok)
                {
                    throw new Error('failed in fetching');
                }

                const data = await response.json();

                setMessage(data.item);

                console.log(data)
            }
            catch(err)
            {
                setError(err.message);
                console.error('Error fetching advice:', err);
            }
            finally
            {

            }
        };
        fetchapiData();
    }, []);

    return(
        <>
            <p>{message}</p>
        </>
    );
}

export default BucketListAPI;