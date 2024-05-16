import React from 'react';
import classes from './Header.module.css'
import AmazonLogo from '../../assets/amazon_logo.png'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import LowerHeader from './LowerHeader'


function TopHeader () {
    return (
        <>
            <div className ={classes.header_container}>
                <div className ={classes.header_image}>
                    <a href="/">
                        <img src = {AmazonLogo} alt="descrAmazon logo" width="100" height="48" />
                    </a>
                </div>
                
                <div className ={classes.header_delivery_add}>
                    <div>
                        <SlLocationPin />
                    </div>
                    <div>
                        <p>Delivering to Tucker 30084</p>
                        <p className ={classes.bold_text}>Update Location</p>                
                    </div>
                </div>

                <div className ={classes.header_search}>
                    <select><option value="All">All</option></select>
                    <input type="text" />
                    <BsSearch size={25}/>
                </div>

                <div className ={classes.user_info}>
                    <div className ={classes.user_language}>
                        <span className="fi fi-us"></span>
                        <select><option value="EN">EN</option></select>

                    </div>
                    <div className ={classes.user_account}>
                        <p>Hello, Sign in</p>
                        <p className ={classes.bold_text}>Accounts and Lists</p>
                    </div>
                    <div className ={classes.user_order}>
                        <p>Returns</p>
                        <p className ={classes.bold_text}>& Orders</p>
                    </div>
                    <div className ={classes.user_cart}>
                        <BiCart size={35} />
                        <span>0</span>
                    </div>
                </div>
            </div>
            <LowerHeader />
        </>
    );
}

export default TopHeader;
