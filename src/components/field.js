import React from 'react';

const Field = ({array}) => (
    <div>
        <form>
            <select name="options">
                {
                    array.map((array, index) =>
                        <option key={index} value={array.id}>
                                {array.name}
                        </option>
                    )
                }
            </select>
        </form>
    </div>
);

export default Field;