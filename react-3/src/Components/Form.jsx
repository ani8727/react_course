import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    text: 'Aniket',
    checkbox: false,
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="form-container">
      <h1>Form Example</h1>

      <form>
        {/* Text Input */}
        <div className="form-field">
          <label>Text:</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>

        {/* Checkbox */}
        <div className="form-field">
          <label>Checkbox:</label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </div>

        {/* Radio Buttons */}
        <div className="form-field">
          <label>Radio:</label>
          <label>
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === 'option1'}
              onChange={handleChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === 'option2'}
              onChange={handleChange}
            />
            Option 2
          </label>
        </div>

        {/* Select Dropdown */}
        <div className="form-field">
          <label>Select:</label>
          <select name="select" value={formData.select} onChange={handleChange}>
            <option value="">-- Choose an option --</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
      </form>

      {/* Display Form Data */}
      <div className="form-data">
        <h3>Form Data</h3>
        <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
        <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
        <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
      </div>
    </div>
  );
}

export default Form;
