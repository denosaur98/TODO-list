import React from 'react';
import '../listItem/index.css';
import Button from '../button/';
const ListItem = ({ todoName, remove, toDoDate }) => {
    return (
        <div className="item">
            <div className="item_text">
                { todoName }
            </div>
            <div
                className="date"
            >{ toDoDate }
            </div>
            <div>
                <button
                    onClick={() => remove(todoName)}
                    className="item_btn"
                >
                </button>
            </div>
        </div>
    );
}
export default ListItem;