import React, { Component } from "react";
import { Link } from "react-router-dom";

import '../../assets/styles/footer.css'
class Footer extends Component {
  render() {
    return (
        <footer class="footer-section">
        <div class="thingy">
            <div class="footer-content pt-5 pb-5">
                <div class="bam">
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <img height="66rem" src="https://www.adweek.com/wp-content/uploads/2018/07/lendingtree-white-890-2081.png"></img>
                            <div class="footer-text">
                                <p>Our team has more then 5 years of experience coding! Our team is dedicated to bringing clients the most up to date, innovative, efficient and effective graphic designing techniques for their websites and the marketing industry. Choose us today to grow your business!

                                </p>
                            </div>
                            
                            <div class="footer-social-icon list-inline social-buttons">
                                <li class="list-inline-item">
                                    <a href="/contact">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="/contact">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="/contact">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                </li>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Links & Services</h3>
                            </div>
                            <ul className="footerList">
                                <li><a href="/">Home</a></li>
                                <li><a href="/development/website">Website Development</a></li>
                                <li><a href="/works">Past Websites</a></li>
                                <li><a href="/development/software">Software Development</a></li>
                                <li><a href="/works">Past Logos</a></li>
                                <li><a href="/development/logo">Logo Design</a></li>
                                <li><a href="/contact">Contact</a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Contact</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <a href="/contact">
                                <div className="button waves-effect waves-light accent-3">
                                    <span>Contact Team</span>
                                </div>
                                </a>
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2021 All Rights Reserved by
                                        <a href="/"> NeroDev.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}
export default Footer;