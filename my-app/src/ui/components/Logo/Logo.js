import React from "react";
import logoImg from './Logo_img.png';
import './Logo.css'
function Logo() {

return  <div className={"logoClass"}>
    <img className={"logoClass__img"} src={logoImg} alt={"logo"} />
    <span className={"logoClass__name"}>Booking</span>
</div>
}
export default Logo;