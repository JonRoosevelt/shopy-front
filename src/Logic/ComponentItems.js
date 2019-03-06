import React, {Component} from 'react'

class ComponentItems extends Component {
    constructor() {
        super()
        this.state = {
            itemName: "",
            itemQuantity: 0,
            itemDescription: "",
            data: []       
        } 
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/category")
            .then(response => response.json())
            .then(response => this.setState({ data: response.categories[0] }))
    }
    
    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }


    render() {

        const allCategories = Object.keys(this.state.data).map((key) => (
            
            <div className="App-items" key={key}>
            <h3>{this.state.data[key].name}</h3>
            <ul className="list" key={key}> 
                    {this.state.data[key].items.map(item => {
                        return(
                            <li key={item.id}> 
                            Item: {item.name}<br/>
                            Descrição: {item.description}<br/>
                            Quantidade: {item.quantity}</li>
                            )
                    })}
            </ul>
            </div>
        ))

        return (
            <div>
                <h2 className="App-subtitle">Categorias</h2>
                { allCategories }
            </div>
        )
    }
}

export default ComponentItems