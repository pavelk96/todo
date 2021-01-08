import React, {Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            })
        }


    };

    render() {
        return (
            <form className="d-flex item-add-form "
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control "
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}/>
                <button className="btn btn-primary" type="submit"
                >Add Item
                </button>
            </form>

        )
    }
}