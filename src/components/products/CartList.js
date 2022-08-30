import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DECREAMENT, REMOVE } from '../../redux/Actions';
import { toast } from 'react-toastify';


export const CartList = () => {

    const getdata = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch()

    const remove = (id) => {
        dispatch(REMOVE(id))
        toast.error("Item is Successully removed from cart")
    }

    const decreament = (item) => {
        dispatch(DECREAMENT(item))
        console.log("clicked");
    }
    const send = (e) => {
        dispatch(ADD(e))
        toast.success(" Product is successfully Increased by 1")

    }
    return (
        <>
            <Container maxWidth="xl" style={{ marginTop: "2rem" }}>
                <Card>
                    <CardContent>
                        <h3>
                            Your Added Card Items are here !!
                        </h3>
                        <Grid container spacing={4}>
                            {
                                getdata && getdata.length ?
                                    (getdata.map((item, i) => {
                                        const { image, title, body, price, sales, description ,rating} = item
                                        return (

                                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                                <div className="product">
                                                    <Card sx={{ maxWidth: 800 }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="260"
                                                            image={image}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {title}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {(body ? body : description).substring(0, 80)}
                                                            </Typography>
                                                            <div className='btn-grp-value'>
                                                                <Typography variant="h6" color="success.main">
                                                                    Size: M
                                                                </Typography>
                                                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                                    <Button onClick={() => send(item)}>+</Button>
                                                                    <Button>{item.qnty}</Button>
                                                                    <Button onClick={() => decreament(item)}>-</Button>
                                                                </ButtonGroup>
                                                            </div>
                                                        </CardContent>
                                                        <CardActions className='footer-card'>
                                                            <div className="left-content">
                                                                <Typography gutterBottom variant="h6" component="div">
                                                                    {price}
                                                                </Typography>
                                                                <Typography variant="body2" color="text.secondary">
                                                                    {sales?sales:rating.count}
                                                                </Typography>
                                                            </div>
                                                            <div className="btn-right">

                                                                <Button variant="outlined" onClick={() => remove(item.id)}>Remove From Cart</Button>
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
                                    ) : (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <CardContent>
                                                <p>No Record Found !!</p>
                                            </CardContent>
                                        </Grid>
                                    )
                            }
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}
