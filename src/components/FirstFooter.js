import React, { Component } from "react"

class FirstFooter extends Component {

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

export default FirstFooter;
