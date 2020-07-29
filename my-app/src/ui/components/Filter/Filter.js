import React, {Component} from "react";
import "./Filter.scss"

export default class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"filter"}>
            <div>
                <form action="" className={"filter__box"}>
                    <label htmlFor={"filter"} className={"filter__box_label"}>Filter Box</label>
                    <input id={"filter"} type="text" placeholder={"Filter by hotel name"} className={"filter__box_input"}/>
                </form>
                <form action="" className={"rating"}>
                    <label className={"rating__label"}>Filter by rating</label>
                    <p><input type="checkbox" className={"rating__checkbox"}/><span
                        className={"stars"}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></p>
                    <p><input type="checkbox" className={"rating__checkbox"}/><span
                        className={"stars"}>&#9733;&#9733;&#9733;&#9733;<span
                        className={"stars_grey"}>&#9733;</span></span></p>
                    <p><input type="checkbox" className={"rating__checkbox"}/><span
                        className={"stars"}>&#9733;&#9733;&#9733;<span
                        className={"stars_grey"}>&#9733;&#9733;</span></span></p>
                    <p><input type="checkbox" className={"rating__checkbox"}/><span className={"stars"}>&#9733;&#9733;
                        <span className={"stars_grey"}>&#9733;&#9733;&#9733;</span></span></p>
                    <p><input type="checkbox" className={"rating__checkbox"}/><span className={"stars"}>&#9733;<span
                        className={"stars_grey"}>&#9733;&#9733;&#9733;&#9733;</span></span></p>
                    <p><input type="submit" value={"FILTER"} className={"rating__button"}/></p>
                </form>
            </div>
        </div>
    }
}