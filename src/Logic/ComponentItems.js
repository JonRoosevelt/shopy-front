import React, {Component} from 'react'
// import { withStyles } from '@material-ui/core/styles'
import { CheckBox } from 'grommet'

class ComponentItems extends Component {
    constructor() {
        super()
        this.state = {
            itemName: "",
            itemQuantity: 0,
            itemDescription: "",
            checked: true,
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
            <div className="list" key={key}> 
                    {this.state.data[key].items.map(item => {
                        return(
                            <CheckBox key={item.id} 
                                label={item.name}
                                Descrição={item.description}
                                Quantidade={item.quantity}
                                checked={true}
                            />
                        )
                    })}
            </div>
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