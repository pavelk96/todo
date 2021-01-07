import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    render() {

        return (
            <div className="btn-group">
                <button
                        onClick={() => this.props.onFilterChange("All")}
                        type="button"
                        className="btn btn-info">All</button>
                <button
                        onClick={() => this.props.onFilterChange("Active")}
                        type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button
                    onClick={() => this.props.onFilterChange("Done")}
                        type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
};

