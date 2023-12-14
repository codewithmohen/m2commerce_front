import React,{useState} from 'react';
import styles from './page.module.css';
import { Box, Button } from '@mui/material';
import PopMouseProductsList from './PopMouseProductsList';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface ProductsHoverProps {
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
    IsShown: boolean;
  }
  
  const ProductsHover: React.FC<ProductsHoverProps> = ({ IsShown,setIsShown }) => {

    return (
       
        <Box>
{/*            
        <button onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>دسته بندی کالاها </button> */}
                 <Button onMouseEnter={() => setIsShown(true)}  variant="text" className={styles.button} startIcon={<LocalOfferIcon />} >  تخفیف ها و پیشنهاد ها </Button>
            {IsShown &&
            <Box sx={{position:"absolute",zIndex:100000}}>
                <div >
                    {/* <p style={{ color: "red" }}>SALAM</p> */}
                    <PopMouseProductsList setIsShown={setIsShown}/>
                </div>
                </Box>
            }
        </Box>
    );
}

export default ProductsHover;