import React, { Component } from "react"
import '../app.scss';
class Header extends Component {
    links = [
        {
            name: "CHARACTERS",
            href: "#",
        },
        {
            name: "COMICS",
            href: "#",
        },
        {
            name: "MOVIES",
            href: "#",
        },
        {
            name: "TV",
            href: "#",
        },
        {
            name: "GAMES",
            href: "#",
        },
        {
            name: "COLLECTIBLES",
            href: "#",
        },
        {
            name: "VIDEOS",
            href: "#",
        },
        {
            name: "FANS",
            href: "#",
        },
        {
            name: "NEWS",
            href: "#",
        },
        {
            name: "SHOP",
            href: "#",
        },
    ]
    render() {



        return (
            <header>
                <div className="cont-header">


                    <ul>
                        {this.links.map((link, index) => (
                            <li className="list-header" key={index}>
                                <a href="">
                                    {link.name}
                                </a>

                            </li>
                        )

                        )}

                    </ul>

                </div>

            </header>
        );
    }
}

export default Header;
