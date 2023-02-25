import React, { Component } from "react"
import '../app.scss';
class Card extends Component {
    render() {

        return (
            <>


                <li key="index">
                    <a href="">
                        <img src={this.props.card.thumb} alt="" />
                        <div className="text">
                            {this.props.card.series}
                        </div>
                    </a>
                </li>



            </>
        );
    }
}

export default Card;
