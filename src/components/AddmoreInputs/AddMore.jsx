import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddMore = () => {
    const [categories, setCategories] = useState([
        { id: '1', name: 'Category 1' },
        { id: '2', name: 'Category 2' }
    ]);
    const [inputFields, setInputFields] = useState([
        {
            id: uuidv4(),
            ques1: '',
            ans1: '',
            category: '1', // Default category
            showInputField: false, // To manage new category input visibility
            newCategory: '' // To manage the value of the new category input
        }
    ]);

    const handleChangeInput = (id, event) => {
        const { name, value } = event.target;
        setInputFields(prevFields =>
            prevFields.map(field =>
                field.id === id ? { ...field, [name]: value } : field
            )
        );
    };

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        if (value === 'add_category') {
            setInputFields(prevFields =>
                prevFields.map(field =>
                    field.id === id ? { ...field, showInputField: true } : field
                )
            );
        } else {
            setInputFields(prevFields =>
                prevFields.map(field =>
                    field.id === id ? { ...field, [name]: value } : field
                )
            );
        }
    };

    const handleNewCategoryChange = (id, event) => {
        const { value } = event.target;
        setInputFields(prevFields =>
            prevFields.map(field =>
                field.id === id ? { ...field, newCategory: value } : field
            )
        );
    };

    const addCategory = id => {
        const inputField = inputFields.find(field => field.id === id);
        const newCategory = {
            id: uuidv4(),
            name: inputField.newCategory
        };
        setCategories([...categories, newCategory]);
        setInputFields(prevFields =>
            prevFields.map(field =>
                field.id === id
                    ? { ...field, category: newCategory.id, showInputField: false, newCategory: '' }
                    : field
            )
        );
    };

    const closeCategory = id => {
        setInputFields(prevFields =>
            prevFields.map(field =>
                field.id === id ? { ...field, showInputField: false, newCategory: '' } : field
            )
        );
    };

    const addMoreFields = () => {
        setInputFields([...inputFields, {
            id: uuidv4(),
            ques1: '',
            ans1: '',
            category: '1', // Default category
            showInputField: false, // To manage new category input visibility
            newCategory: '' // To manage the value of the new category input
        }]);
    };

    return (
        <div>
            {inputFields.map(inputField => (
                <div key={inputField.id}>
                    <div className="form-group row">
                        <label htmlFor="ans1" className="col-form-label pt-3 ml-4">Answer:</label>
                        <input
                            type="text"
                            className="form-control col-10 ml-4 ans"
                            style={{ backgroundColor: 'transparent', borderBottom: '1px solid black', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}
                            id="ans1"
                            placeholder="Enter Answer"
                            name="ans1"
                            value={inputField.ans1}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                    </div>
                    <br />
                    <div className="form-group row">
                        <label htmlFor="category" className="col-form-label pt-3 ml-4">Category:</label>
                        {!inputField.showInputField ? (
                            <select
                                className="form-control col-10 ml-4"
                                id="category"
                                name="category"
                                value={inputField.category}
                                onChange={event => handleChange(inputField.id, event)}
                            >
                                <option value='add_category'>Add category</option>
                                {categories.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="form-control col-10 ml-4"
                                    placeholder="Enter category"
                                    name="newCategory"
                                    value={inputField.newCategory}
                                    onChange={event => handleNewCategoryChange(inputField.id, event)}
                                />
                                <button type='button' className="btn btn-primary sm-col-12" onClick={() => addCategory(inputField.id)}>
                                    Add
                                </button>
                                &nbsp;&nbsp;
                                <button type='button' className="btn btn-danger sm-col-12" onClick={() => closeCategory(inputField.id)}>
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                    <br />
                </div>
            ))}
            <button type="button" className="btn btn-success" onClick={addMoreFields}>
                Add More
            </button>
        </div>
    );
};


export default AddMore;
