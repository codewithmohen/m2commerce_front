import { useQuery } from 'react-query';


export const getProduct = async () => {
    const url = 'https://fakestoreapi.com/products/1';
    const res = await fetch(url);
    return res.json();
};
