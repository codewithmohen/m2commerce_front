'use client';
import React from 'react';
import { useQuery } from 'react-query';
import { getProduct } from './service';

export default function Module() {
    const { data, status } = useQuery("users", getProduct);
    return (
        <div className="App">
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <div>
                    {data.title}
                    {/* {data.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))} */}
                </div>
            )}
        </div>
    );
}
