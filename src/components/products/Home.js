import React from 'react'
import './product.css'
import { InputAdornment,OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HANDLE_INPUT_CHANGE } from "../../redux/Actions"
import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import ProductTab from './ProductTab';


export const Home = () => {
    let rquery = useSelector((state) => state.cartreducer.squery);
    const dispatch = useDispatch();

    return (
        <div className="main-wrapper">
            <div className="main-container">
                <div className="search-main-bx">
                    <div className="search-bar">

                        <OutlinedInput
                            className='search-input'
                            fullWidth
                            placeholder='Search Product'
                            id="input-with-icon-adornment"
                            sx={{
                                '& legend': { display: 'none' },
                                '& fieldset': { top: 0 },
                                }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            value={rquery}
                            onChange={(e) => dispatch(HANDLE_INPUT_CHANGE(e.target.value))}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="listing-bx">
                    <ProductTab />
                </div>
            </div>
        </div>
    )
}
