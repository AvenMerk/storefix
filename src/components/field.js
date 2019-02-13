import React, { Component } from 'react';

class Field extends Component {
    render() {
        return (
            <div>
                <form>
                    <select name="options">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Field;