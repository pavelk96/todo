import React, {Component} from 'react';
import classNames from 'classnames';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        const {filter} = this.props
        return (
            <div className="btn-group">
                <button
                    className={classNames("btn", {
                        "btn-info": filter === "All",
                        "btn-outline-secondary": filter !== "All",
                    })}
                    onClick={() => this.props.onFilterChange("All")}
                    type="button"
                    >All</button>
                <button
                    className={classNames("btn", {
                        "btn-warning": filter === "Active",
                        "btn-outline-secondary": filter !== "Active",
                    })}
                    onClick={() => this.props.onFilterChange("Active")}
                    type="button"
                    >Active</button>
                <button
                    className={classNames("btn", {
                        "btn-success": filter === "Done",
                        "btn-outline-secondary": filter !== "Done",
                    })}
                    onClick={() => this.props.onFilterChange("Done")}
                    type="button"
                    >Done
                </button>
            </div>
        );
    }
};
