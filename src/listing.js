
import React, { Component } from 'react'




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
        fetch(this.url+'Biscuits')
        .then(response => response.json())
        .then(records => {
            this.setState({
                records: records
            })
        })
        .catch(error => console.log(error))


    }
    handleChange(event) {
        this.setState({text: event.target.value});
      }
    
      handleSubmit(event) {
          this.handleChange(event)
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
                <a class="button">{record.Store}</a>
                
              </div>
            </div> 
          </div>)
        })

        return recordList;
    }

    render() {
        
        return (
            
            <div>
                <h1>Where 2 buy</h1>
            <form onSubmit={this.handleSubmit}>
            
        
            <input type="text" defaultValue={this.state.text}/>
            
            <input type="submit" value="Envoyer" />
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