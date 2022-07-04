import React, { useEffect, useState } from 'react';
import Site from '../Site/Site';
import './Sites.css';

const Sites = () => {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        fetch("taskloby.json")
            .then((res) => res.json())
            .then((data) => setSites(data));
    }, []);
    return (
        <div className="sites-container container mx-auto max-w-[1080] py-10">


            {sites.map((site) => (

                <Site key={site.id} site={site}></Site>
            ))}
        </div>
    );
};

export default Sites;