"use client";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import React, { useEffect } from 'react';
import { getProduct } from './service';


function Module() {

    const { status, isStale, isFetching, error, data } = useQuery("product", getProduct);
    return (
        <div className="App">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    {data.title}
                    {/* {data.map((item) => (
                        <p key={item.id}>{item.name}</p>
                    ))} */}
                </div>
            )}
        </div>
    );
}
export default Module;
