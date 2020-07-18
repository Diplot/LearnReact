import React from "react";
import './Main.css';
function Main() {

    return <div>
        <form action="" className={"mainForm"}>
            <select name="" id="destination" className={"mainForm__item mainForm__item_text"} >
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
        <div className={'mainAbout'}>
            <h1>Travel with <span className={'mainAbout__h1'}>Booking</span></h1>
            <p className={'mainAbout__p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam animi assumenda aut
                consectetur cum debitis deleniti eaque facere facilis hic ipsam, nam quam repellat reprehenderit
                totam velit voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam
                animi assumenda aut consectetur cum debitis deleniti eaque facere facilis hic ipsam, nam quam repellat
                reprehenderit totam velit voluptatem.
            </p>
        </div>

    </div>

}
export default Main;