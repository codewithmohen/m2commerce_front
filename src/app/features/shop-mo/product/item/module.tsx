import React, { useEffect } from 'react';

import { getProduct } from './service';
import { useQuery } from 'react-query';
export default function module() {
    const res = useQuery("product", getProduct);
    useEffect(() => {
        console.log(res);
    }, [res]);
    return (
        <div className="App">
            {/* {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    {/* {data.map((item: any) => (
                        <p key={item.id}>{item.name}</p>
                    ))} */}
        </div>
    );
}
