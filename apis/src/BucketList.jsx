import { useState, useEffect } from "react";

function BucketListAPI() {

    useEffect(() => {
        const feychData = async () => {
            try
            {
                const API_URL = 'https://api.api-ninjas.com/v1/bucketlist';
                const API_KEY = '47/9xgXbTofxC8Bbhndayg==mlz7vxlxrrnD8j6Q';

                const response = await fetch(API_URL, {
                    headers: {
                        'X-Api-Key': API_URL;
                    }
                });
                
            }
            catch
            {

            }
            finally
            {

            }
        }
    }, []);
}

export default BucketListAPI;