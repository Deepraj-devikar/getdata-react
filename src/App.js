import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded : false,
        }
    }

    componentDidMount(){
        fetch('your/api/link')                  //add your working api link here
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items : json,
            })
        });
    }

    render() { 

        var { isLoaded, items } = this.state;
        console.log(items)

        if (!isLoaded){
            return( <div> Loading... </div> );
        }

        else {
            return (
                <div className="App">
                    <ul>
                        {items.map(item => (
                            <li>
                                {item.first_name} {item.last_name}
                            </li>
                        ))}
                    </ul>
                </div>
            );    
        }
        
    }
}

export default App;
