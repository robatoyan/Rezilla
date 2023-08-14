import { useState } from 'react';
import './style.css';

export const Menu = () => {
    const [btnMenu, setBtnMenu] = useState(false)
    return (
        <div className="Menu">
            <ul className='Menu-ul'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Listning'>Listings</a></li>
                <li><a href='#Service'>Services</a></li>
                <li><a href='#Blogs'>Blogs</a></li>
            </ul>
            <div className='RezilaHome'>
                <div>
                    <i className="fa fa-home" aria-hidden="true"></i>
                </div>
                <h2>Rezilla</h2>
            </div>
            <div className='AddListning'>
                <div>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <h2>Login/Register</h2>
                </div>
                <button><i className="fa fa-home" aria-hidden="true"></i>Add Listing</button>
            </div>
            <i className="fa fa-bars" aria-hidden="true" onClick={() => setBtnMenu(true)}></i>
            <div className={btnMenu ? 'MenuActiv' : "MenuNoActiv"}>
                <i className="fa fa-times" aria-hidden="true" onClick={() => setBtnMenu(false)}></i>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Listings</li>
                    <li>Services</li>
                    <li>Blogs</li>
                </ul>
                <div className='AddListning menuAddListing'>
                    <div>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                        <h2>Login/Register</h2>
                    </div>
                    <button><i className="fa fa-home" aria-hidden="true"></i>Add Listing</button>
                </div>
            </div>
        </div>
    )
}