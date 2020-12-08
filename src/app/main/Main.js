import React from "react";
import straipsniai from "../duomenys/straipsniai";
import Article from "../article/Article";
import Contacts from "../kontaktai/Contacts";
import BookList from "../bookList/BookList";


class Main extends React.Component{
    constructor(){
        super();
    }

render(){
    const duomenysStraipsniai = straipsniai.map(straipsnis =>
        <Article data = 
        {{key:straipsnis.id,
        title:straipsnis.pavadinimas,
    description:straipsnis.aprasymas}}/>)

    return(
        <main>
            <BookList/>
            <div>{duomenysStraipsniai}</div>
            <Contacts vardas= 'Laura' email = 'gsm@gmail.com' intialAge={17}/>

        </main>
    )

}
}

export default Main;
