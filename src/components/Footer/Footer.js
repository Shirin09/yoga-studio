import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container-fluid">
                <div class="container">
                    <div class="footer-info">
                        <a href="index.html" class="footer-logo">Y<span>oo</span>ga</a>
                        <h3>123 Chui Avenue, Bishkek, Kyrgyzstan</h3>
                        <div class="footer-menu">
                            <p>+012 345 67890</p>
                            <p>info@yooga.com</p>
                        </div>
                        <div class="footer-social">
                            <a href="https://twitter.com/yoga"><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/results?search_query=yooga"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.instagram.com/yogafit.bishkek/"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Footer;