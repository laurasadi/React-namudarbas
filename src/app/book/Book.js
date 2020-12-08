import React from 'react';
import Sell from '../sell/Sell';

export default function Book (){
    return(
        <div className = 'oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
            <Sell/>
        </div>
    )
}

const Image = () => <img src = "https://www.baltoslankos.lt/media/images/books/2020/9786094792939.jpg" alt="nuotrauka"/>;
const Author = () => <h2>Autorius</h2>;
const Title = () => <h2>Pavadinimas</h2>;
const Price = () => <p>20 eur</p>;