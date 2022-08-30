import React, { useEffect, useState } from 'react'
import './product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Card, CardActions, CardContent, CardMedia, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Tab, Tabs, Typography } from '@mui/material';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import axios from 'axios';
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
