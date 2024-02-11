"use client";

import React, { useEffect, useState } from "react";
import Layout from "./layout";
import { useSelector } from "react-redux";
import { IAuthState } from "./(auth)/_reducer/auth.slice";
import { redirect } from "next/navigation";
import useSecure from "./_hooks/useSecure";

export default function index() {
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    const [loadPage, setLoadPage] = useState(false);
    useSecure(setLoadPage);
    // React.useEffect(() => {
    //     if (!auth.data?.jwt)
    //         redirect('/auth/sign-in');
    // }, []);
    return (
        loadPage && <>
            <Layout>
                <p>welcome</p>
            </Layout>
        </>
    );
}
