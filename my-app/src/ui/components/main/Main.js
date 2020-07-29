import React from "react";
import './Main.css';
import Text from "../Text/Text";
import Result from "../Result/Result";
import Filter from "../Filter/Filter";

function Main() {

    return <div>
        <form action="" className={"mainForm"}>
            <select name="" id="destination" className={"mainForm__item mainForm__item_text"}>
                <option value="">Днепр</option>
                <option value="">Киев</option>
                <option value="">Харьков</option>
                <option value="">Одесса</option>
            </select>
            <input className={"mainForm__item mainForm__item_text"} type="date" placeholder={'Check-in'} required/>
            <input className={"mainForm__item mainForm__item_text"} type="date" placeholder={'Check-out'} required/>
            <input className={"mainForm__item mainForm__item_number"} type="number" placeholder={'Adults'} required/>
            <input className={"mainForm__item mainForm__item_number"} type="number" placeholder={'Children'} required/>
            <input className={"mainForm__item mainForm__item_button"} type="submit" value={"SEARCH"}/>
        </form>
        <Text/>
        <Filter />
        <Result/>
    </div>

}

export default Main;