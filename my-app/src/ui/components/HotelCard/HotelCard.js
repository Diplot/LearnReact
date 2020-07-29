import React, {Component} from "react";
import "./HotelCard.scss" ;
import img from "./pool--v15927598.jpg";

export default class HotelCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <section>
                <figure className={"hotel"}>
                    <img src={img} className={"hotel__img"} alt="Фото отеля"/>
                    <figcaption>
                        <h1 className={"hotel__name"}>hotelName</h1>
                        <span className={"hotel__rating"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <h3 className={"hotel__adress"}>adress </h3>
                    </figcaption>
                </figure>
            </section>
        </div>
    }
}