import { render } from '@testing-library/react';
import React, {Component} from 'react'

class Contacts extends Component{
    constructor(props){
        super();
        this.state = {
            age:props.intialAge
        }
    }

 makeOlder() {
     this.setState({
         age: this.state.age +20
     })
    
 }
 render(){
     return(
         <div>
             <h3>Vardas: {this.props.vardas}</h3>
             <p>el. pastas: {this.props.email}</p>
             <p>amzius: {this.state.age}</p>
             <button onClick = {this.makeOlder.bind(this)}>Mygtukas</button>
         </div>
     )
 }

}
export default Contacts