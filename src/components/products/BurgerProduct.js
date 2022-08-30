import React, { useEffect, useState } from 'react'
import './product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Button } from '@mui/material';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import axios from 'axios';
import { ADD } from "../../redux/Actions"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../loader/Loader';

const BurgerProduct = () => {
    const [pizzaData, setPizzaData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    let rquery = useSelector((state) => state.cartreducer.squery);
    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e))
        toast.success(" Product is successfully added to cart")

    }
    useEffect(() => {
        fetchPizza()
    }, [])

    const fetchPizza = async () => {
        try {
            setIsLoading(true)
            const pizzzadata = await axios.get("https://fakestoreapi.com/products");
            setPizzaData(pizzzadata.data)
            setIsLoading(false)

        } catch (error) {
            setPizzaData(error)
        }
    }
    return (
        <>
            {/* listing code will start  */}
            {isLoading && <Loader />}
            <div className="listing-bx" id='burger'>
                <Grid container spacing={4}>
                    {
                        pizzaData
                            .filter((val) => {
                                if (rquery === "") {
                                    return val
                                } else if ((val.title.toLowerCase().includes(rquery)) || (val.description.toLowerCase().includes(rquery))
                                ) {
                                    return val
                                }

                            }).map((item, i) => {
                                const { title, price, description, image, rating } = item;
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                        <div className="product">
                                            <Card sx={{ maxWidth: 800 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="260"
                                                    image={image}
                                                    alt="green iguana"
                                                    style={{ objectFit: "contain" }}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {title.slice(0, 30)}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {(description).substring(0, 80)}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className='footer-card'>
                                                    <div className="left-content">
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {price}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {rating.count}
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

export default BurgerProduct