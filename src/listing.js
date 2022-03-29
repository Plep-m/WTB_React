
import React, { Component } from 'react'

import Logo from './wtb_logo.png'


class Listing extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            records: [],
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.url = 'http://localhost:8090/api/articles/'
        
    }
    
    componentDidMount() {
        console.log("componentDidMount")


    }

    handleChange(event) {    this.setState({text: event.target.value});  }
    handleSubmit(event) {
        console.log("handleSubmit with :" + this.state.text)
        fetch(this.url+this.state.text)
        .then(response => response.json())
        .then(records => {
            this.setState({
                records: records
            })
        })
        .catch(error => console.log(error))

        event.preventDefault();
    }
  
    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            return recordList.push(
            <div class="product-box">
            <div class="container">
              <img src={record.ImageUrl} alt="cookies" class="hero-image" />
              
              
              
              <div class="information">
          
                <div class="name">{record.Name}</div>
                
                
                <div class="store"></div>
                <a class="button">📍 {record.Store}</a>
                
              </div>
            </div> 
          </div>)
        })

        return recordList;
    }

    render() {
        
        return (
            
            <div class="header-hero-content">
                <img class="logo"src={Logo} alt="Logo"/>
            <form onSubmit={this.handleSubmit}>
            
            
        
            <div class="header-singup wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="Oeufs frais bio"/>
                <button type="submit"class ="main-btn">Envoyer</button>
            </div>
            
            </form>   
                
            <ul>
                {this.renderListing()}
            </ul>
            </div>
        );
    }
}

export default Listing;
//need city 