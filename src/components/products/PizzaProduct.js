import React from 'react'
import dbData from '../../db.json';
import './product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { ADD } from "../../redux/Actions"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const PizzaProduct = () => {
    const dispatch = useDispatch();
    let rquery = useSelector((state) => state.cartreducer.squery);
    const send = (e) => {
        dispatch(ADD(e))
        toast.success(" Product is successfully added to cart")
    }

    return (
        <>
            {/* listing code will start  */}
            <div className="listing-bx" id='pizza'>
                <Grid container spacing={4}>
                    {
                        dbData
                            .filter((val) => {
                                if (rquery === "") {
                                    return val
                                } else if ((val.body.toLowerCase().includes(rquery)) || (val.sales.toLowerCase().includes(rquery))
                                    || (val.title.toLowerCase().includes(rquery))) {
                                    return val
                                } 

                            }).map((item, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                        <div className="product">
                                            <Card sx={{ maxWidth: 800 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="260"
                                                    image={item.image}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {(item.body).substring(0, 80)}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className='footer-card'>
                                                    <div className="left-content">
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {item.price}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.sales}
                                                        </Typography>
                                                    </div>
                                                    <div className="btn-right">
                                                        <Button variant="outlined" endIcon={<AddShoppingCartIcon />} onClick={() => send(item)}>Add to Cart</Button>
                                                    </div>
                                                </CardActions>
                                            </Card>
                                            <div className="wishlist">
                                                <IconButton aria-label="add to favorites" variant="outlined" >
                                                    <PlaylistAddRoundedIcon />
                                                </IconButton>
                                                <IconButton aria-label="add to favorites" variant="outlined">
                                                    <FavoriteRoundedIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            })
                    }
                </Grid>
            </div>
        </>
    )
}

export default PizzaProduct