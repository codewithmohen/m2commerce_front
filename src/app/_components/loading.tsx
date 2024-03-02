import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export default function Loading() {
    return (
        <div
            style={{
                position: 'absolute',
                height: '100px',
                width: '100px',
                top: '50%',
                left: '50%',
                marginLeft: '-50px',
                marginTop: - '50px',
            }}
        >
            {
                <CircularProgress />
            }
        </div >
    );
}
