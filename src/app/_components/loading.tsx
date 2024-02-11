import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export default function Loading() {
    return (
        <div
            style={{
                // do your styles depending on your needs.
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {
                <CircularProgress />
            }
        </div>
    );
}
