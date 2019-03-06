import React from 'react'

function ListItem(props) {
    console.log(props)
    return (
        <div className="list-item">
            <div className="list-inputs">
                <input
                    type="text"
                    name="itemName"
                    placeholder="Item"
                    value={this.props.itemName}
                    onChange={this.props.handleChange}
                />
                <input
                    type="number"
                    name="itemName"
                    placeholder="Quantity"
                    value={this.props.itemQuantity}
                    onChange={this.props.handleChange}
                />
                <input
                    type="number"
                    name="itemDescription"
                    placeholder="Description"
                    value={this.props.itemDescription}
                    onChange={this.props.handleChange}
                />
            </div>
        </div>
    )
}

export default ListItem