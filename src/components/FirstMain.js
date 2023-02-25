
import React, { Component } from "react"
import '../app.scss';
import Card from "./Card"
class FirstMain extends Component {
    cards = [
        {
            "thumb": "https://upload.wikimedia.org/wikipedia/en/5/5a/Action_Comics_1.jpg",
            "price": "$19.99",
            "series": "Action Comics",
            "type": "comic book"
        },
        {
            "thumb": "https://m.media-amazon.com/images/P/B08JHDLMJS.01._SCLZZZZZZZ_SX500_.jpg",
            "price": "$3.99",
            "series": "American Vampire 1976",
            "type": "comic book"
        },
        {
            "thumb": "https://static.posters.cz/image/750/poster/dc-comics-aquaman-i26317.jpg",
            "price": "$16.99",
            "series": "Aquaman",
            "type": "graphic novel"
        },
        {
            "thumb": "https://upload.wikimedia.org/wikipedia/it/0/0e/Batgirl_1.jpg",
            "price": "$2.99",
            "series": "Batgirl",
            "type": "comic book"
        },
        {
            "thumb": "https://upload.wikimedia.org/wikipedia/it/1/19/Batman_3_variant.jpg",
            "price": "$3.99",
            "series": "Batman",
            "type": "comic book"
        },
        {
            "thumb": "https://www.syfy.com/sites/syfy/files/2021/09/batman-beyond-neo-year-1-main-cover.jpg",
            "price": "$2.99",
            "series": "Batman Beyond",
            "type": "comic book"
        },
        {
            "thumb": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81EXg0l71LL.jpg",
            "price": "$3.99",
            "series": "Batman/Superman",
            "type": "comic book"
        },
        {
            "thumb": "https://image.keycollectorcomics.com/media/superman_batman_annual_4.jpeg",
            "price": "$4.99",
            "series": "Batman/Superman Annual",
            "type": "comic book"
        },
        {
            "thumb": "https://m.media-amazon.com/images/I/41nGyVF7C2L.jpg",
            "price": "$5.99",
            "series": "Batman: The Joker War Zone",
            "type": "comic book"
        },
        {
            "thumb": "https://m.media-amazon.com/images/I/91wWOz7QoPS.jpg",
            "price": "$6.99",
            "series": "Batman: Three Jokers",
            "type": "comic book"
        },
        {
            "thumb": "https://m.media-amazon.com/images/I/51sZeblq1fL.jpg",
            "price": "$4.99",
            "series": "Batman: White Knight Presents: Harley Quinn",
            "type": "comic book"
        },
        {
            "thumb": "https://files.synapp.it/1042763/foto/prodotti/B/1628955638793_catwoman_5_-_dc_comics_special_B.jpg",
            "price": "$16.99",
            "series": "Catwoman",
            "type": "graphic novel"
        }
    ]
    render() {

        return (
            <>
                <div className="jumbotron">
                    <img src="" alt="" />
                    <a href="" className="text-current">CURRENT SERIES </a>
                </div>
                <main className="main-first">

                    <div className="container">
                        <ul className="card-box">
                            {this.cards.map((card, index) => (
                                <Card card={card} key={index} />
                            ))}
                        </ul>
                        <div className="cont-btn">
                            <a href="" className="btn">LOAD MORE</a>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default FirstMain;
