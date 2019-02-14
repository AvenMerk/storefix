import React from 'react';

const Field = ({array, placeHolder}) => (
    <div>
        <form>
            <select name="options" className='custom-select'>
                <option value="" hidden>{placeHolder}</option>
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