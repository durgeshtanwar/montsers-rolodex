import React from 'react';
import './searchbox.style.css';

export const SearchBox = (props) =>(
       <input type='search' className ="search" placeholder={props.placeholder} onChange={props.handleChange}
     />
)

