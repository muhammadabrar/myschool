import React from 'react';
import { Field, ErrorMessage, useField, SuccessMessage } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}  ${meta.touched && !meta.success && 'is-valid'}`}
        {...field} {...props}
        autoComplete="on"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export const SelectField = ({ options, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props}>
              {options.map((option)=>
              <option value={option.value}>{option.key}</option>
              )}
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
      
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

