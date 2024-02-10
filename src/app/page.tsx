"use client";

import React, { useEffect } from "react";
import Shop from "./(shop)/shop/page";
import Layout from "./layout";
import { useSelector } from "react-redux";
import { IAuthState } from "./(auth)/_reducer/auth.slice";
import { redirect } from "next/navigation";

export default function index() {
    const auth = useSelector((state: any) => state.auth) as IAuthState;
    React.useEffect(() => {
        if (!auth.data?.jwt)
            redirect('/auth/sign-in');
    }, []);
    return (
        <>
            <Layout>
                <Shop />
            </Layout>
        </>
    );
}
