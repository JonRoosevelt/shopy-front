import React, { Component } from 'react'
import { CheckBox } from 'grommet'

export default class extends CheckBox {
    constructor(props) {
        super(props)
    }
    return(
        <div>
        <CheckItem
            label={props.checkbox.itemName}
            description={props.checkbox.itemDescription}
            quantity={props.checkbox.itemQuantity}
            checked={props.checkbox.checked}
        />
        </div>
    )
}