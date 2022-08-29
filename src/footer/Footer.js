
import { Grid } from '@mui/material';
import React from 'react'
import YourLogo from './ao.svg';
import './footer.css'


export const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} >
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Appventurez Noida</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} >
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9651######</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} >
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="footer-content pt-5 ">
                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src={YourLogo} className="img-fluid" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                        </form>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="#">App</a></p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} className="d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </footer>
        </>

    )
}



