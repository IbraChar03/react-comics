import React, { Component } from "react"
import imgDc from '../images/dc-logo-bg.png'

class FirstFooter extends Component {
    dcComics =
        [
            {
                title: "DC COMICS",

            },
        ]
    listDcComics = [
        {
            name: "Characters",
            href: "#"
        },
        {
            name: "Comics",
            href: "#"
        },
        {
            name: "Movies",
            href: "#"
        },
        {
            name: "TV",
            href: "#"
        },
        {
            name: "Games",
            href: "#"
        },
        {
            name: "Videos",
            href: "#"
        },
        {
            name: "News",
            href: "#"
        },

    ]

    dc = [
        {

            title: "DC",

        }
    ]
    listDc = [


        {
            name: "Terms Of Use",
            href: "#"
        },
        {
            name: "Privacy policy (New)",
            href: "#"
        },
        {
            name: "Ad Choices",
            href: "#"
        },
        {
            name: "Advertising",
            href: "#"
        },
        {
            name: "Jobs",
            href: "#"
        },
        {
            name: "Subscriptions",
            href: "#"
        },
        {
            name: "Talent WOrkshops",
            href: "#"
        },
        {
            name: "CPSC Certificates",
            href: "#"
        },
        {
            name: "Ratings",
            href: "#"
        },
        {
            name: "Shop Help",
            href: "#"
        },
        {
            name: "Contact Us",
            href: "#"
        },
    ]
    sites = [
        {
            title: "SITES",

        }
    ]
    listSites = [

        {
            name: "DC",
            href: "#"
        },
        {
            name: "MAD Magazine",
            href: "#"
        },
        {
            name: "DC Kids",
            href: "#"
        },
        {
            name: "DC Universe",
            href: "#"
        },
        {
            name: "DC Power Visa",
            href: "#"
        },
    ]
    shop =
        [
            {

                title: "SHOP",

            }
        ]
    listShop = [

        {
            name: "Shop DC",
            href: "#"
        },
        {
            name: "Shop DC Collectibles",
            href: "#"
        },
    ]

    render() {

        return (
            <>
                <main className="first-footer">

                    <div className="container">
                        <div className="cont-footer">
                            <div className="cont">
                                <ul>
                                    {this.dcComics.map((comic, index) => (
                                        <li className="sub" key={index}>
                                            <a href="" className="title-text ">{comic.title}</a>
                                            {this.listDcComics.map((item, ind) =>
                                                <a href="" key={ind}>{item.name} </a>
                                            )}
                                        </li>

                                    ))}

                                </ul>
                            </div>
                            <div className="cont">
                                <ul>
                                    {this.dc.map((comic, index) => (
                                        <li className="sub" key={index}>
                                            <a href="" className="title-text ">{comic.title}</a>
                                            {this.listDc.map((item, ind) =>
                                                <a href="" key={ind}>{item.name} </a>
                                            )}
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            <div className="cont">
                                <ul>
                                    {this.sites.map((comic, index) => (
                                        <li className="sub" key={index}>
                                            <a href="" className="title-text ">{comic.title}</a>
                                            {this.listSites.map((item, ind) =>
                                                <a href="" key={ind}>{item.name} </a>
                                            )}
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            <div className="cont height">
                                <ul>
                                    {this.shop.map((comic, index) => (
                                        <li className="sub" key={index}>
                                            <a href="" className="title-text ">{comic.title}</a>
                                            {this.listShop.map((item, ind) =>
                                                <a href="" key={ind}>{item.name} </a>
                                            )}
                                        </li>

                                    ))}
                                </ul>
                            </div>

                        </div>

                        <img src={imgDc} className="img" />

                    </div>
                </main>
            </>
        );
    }
}

export default FirstFooter;
