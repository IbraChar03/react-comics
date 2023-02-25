import React, { Component } from "react"
import Comics from "../images/buy-comics-digital-comics.png"
import Merch from "../images/buy-comics-merchandise.png"
import Sub from "../images/buy-comics-subscriptions.png"
import Shop from "../images/buy-comics-shop-locator.png"
import Visa from "../images/buy-dc-power-visa.svg"

class SecondMain extends Component {
    lists = [
        {
            img: Comics,
            href: "#",
            name: "DIGITAL COMICS"
        },
        {
            img: Merch,
            href: "#",
            name: "DC MERCHANDISE"
        },
        {
            img: Sub,
            href: "#",
            name: "SUBSCRIPTION"
        },
        {
            img: Shop,
            href: "#",
            name: "COMIC SHOP LOCATOR"
        },
        {
            img: Visa,
            href: "#",
            name: "DC POWER VISA"
        },
    ]

    render() {

        return (
            <>
                <main className="second-main">
                    <div className="container">
                        <ul>
                            {this.lists.map((list => (

                                <li>
                                    <img className="img" src={list.img} />
                                    <a>
                                        {list.name}
                                    </a>
                                </li>
                            )))}

                        </ul>
                    </div>
                </main>
            </>
        );
    }
}

export default SecondMain;
