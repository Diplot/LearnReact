import React, {Component} from "react";
import "./Result.scss";
import HotelCard from "../HotelCard/HotelCard";

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <section className={"result"}>
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </section>
        </div>
    }
}