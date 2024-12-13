import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after 1.5 seconds
        }, 1500);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>Loading...</p>
            </div>
        );
    }

    return null; // Return null if not loading
};

export default Loader;

