import React from "react";
import './Header.css'
//components
import Logo from "../Logo/Logo";
function Header() {
return <header className={'headerClass'}>
    <div><Logo /></div>
    <div>
        <button className={'headerClass__button'}>ABOUT</button>
        <button className={'headerClass__button'}>MY BOOKING</button>
        <button className={'headerClass__button'}>SING IN</button>
    </div>
</header>
}
export default Header;