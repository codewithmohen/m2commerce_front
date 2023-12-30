import { useQuery } from 'react-query';


export const getProduct = async () => {
    const url = 'https://fakestoreapi.com/products';
    const res = await fetch(url);
    return res.json();
};
