'use client';
import React, { useState } from 'react';
import useSecure from '../_hooks/useSecure';

export default function index() {
    const [loadPage, setLoadPage] = useState(false);
    useSecure(setLoadPage);
    return (
        loadPage && <div>dashboard core</div>
    );
}
