import React from "react";
import straipsniai from "../duomenys/straipsniai";
import Article from "../article/Article";


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
            <div>{duomenysStraipsniai}</div>
        </main>
    )

}
}

export default Main;
