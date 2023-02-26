import React, { Component } from "react"
import facebook from '../images/footer-facebook.png'
import twitter from '../images/footer-twitter.png'
import youtube from '../images/footer-youtube.png'
import pinterest from '../images/footer-pinterest.png'
import periscope from '../images/footer-periscope.png'

class SecondFooter extends Component {

    imgSocial = [
        {
            name: "Facebook",
            img: facebook
        },
        {
            name: "Twitter",
            img: twitter
        },
        {
            name: "Youtube",
            img: youtube
        },
        {
            name: "Pinterest",
            img: pinterest
        },
        {
            name: "Periscope",
            img: periscope
        },
    ]
    render() {

        return (
            <>
                <main className="second-footer">
                    <div className="container">
                        <a href="" className="sign">SIGN-UP NOW!</a>
                        <div className="cont-socials">

                            <strong className="text-follow">FOLLOW US</strong>

                            {this.imgSocial.map((social, index) => (
                                <a href="" key={index}>
                                    <img className="social-img" src={social.img} alt="" />
                                </a>
                            ))}

                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default SecondFooter;
