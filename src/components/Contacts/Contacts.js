import React from 'react';
import '../ClassesCard/ClassesCard.css'

const Contacts = () => {
    return (
        <div>
            <div class="container">
            <div class="contact">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Get In Touch</p>
                    <h2>For Any Query</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-4 contact-item wow zoomIn" data-wow-delay="0.2s">
                                <i class="fa fa-map-marker-alt"></i>
                                <div class="contact-text">
                                    <h2>Location</h2>
                                    <p>123 Chui ave, Bishkek, Kyrgyzstan</p>
                                </div>
                            </div>
                            <div class="col-md-4 contact-item wow zoomIn" data-wow-delay="0.4s">
                                <i class="fa fa-phone-alt"></i>
                                <div class="contact-text">
                                    <h2>Phone</h2>
                                    <p>+996 775 678950</p>
                                </div>
                            </div>
                            <div class="col-md-4 contact-item wow zoomIn" data-wow-delay="0.6s">
                                <i class="far fa-envelope"></i>
                                <div class="contact-text">
                                    <h2>Email</h2>
                                    <p>info@yooga.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div class="control-group">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    );
};

export default Contacts;