'use client';
import React, { } from 'react';
import { default as L } from '../../../../admin/layout';
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <L>
            {children}
        </L>
    );
}
