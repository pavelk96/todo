import React, {Component} from 'react';
import './item-add-form.css'
export default class ItemAddForm extends Component {
        render() {
           return (
               <div className="d-grid gap-2 d-md-block add-item-btn ">
                   <button className="btn btn-primary" type="button"
                   onClick={() => this.props.onItemAdded("hello world")}
                   >Add Item</button>
               </div>

           )
        }
}