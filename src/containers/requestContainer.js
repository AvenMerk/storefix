import React from 'react';
import Field from '../components/field.js';
import Button from '../components/button.js';

const RequestContainer = () => (
    <div>
        <Field />
        <Field />
        <Field />
        <Button buttonName='Добавить новое оборудование' />
    </div>
);

export default RequestContainer;