import React from 'react';
import classes from './Category.module.css'

function CategoryCard ({data}) {
    
    return (
        <div className ={classes.category}>
            <a href="">
                <span>
                    <h3>{data.title}</h3>
                </span>
                <img className ={classes.image} src={data.imgLink} alt="" />
                <p>Show now</p>
            </a>
        </div>
    );
}

export default CategoryCard;

