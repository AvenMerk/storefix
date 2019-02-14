import React from 'react';
import Field from '../components/field.js';
import Button from '../components/button.js';

const RequestContainer = () => (
    <div>
        <div>
            <Field />
            <Field />
            <Field />
        </div>
        <Button buttonName='Добавить новое оборудование' />
    </div>
);

export default RequestContainer;