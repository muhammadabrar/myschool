import React from 'react';
import { Field, ErrorMessage, useField, SuccessMessage } from 'formik';
import { TextInput, DatePicker, DatePickerInput } from 'carbon-components-react';

export const TextField = ({ helperText,label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {/* <label htmlFor={field.name}>{label}</label> */}
      {/* <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}  ${meta.touched && !meta.success && 'is-valid'}`}
        {...field} {...props}
        autoComplete="on"
      /> */}
      <TextInput
      helperText={helperText}
      id="test2"
      invalidText="required"
      {...field} {...props}
      labelText={label}
      invalid={meta.touched && meta.error && 'true'}
      success="true"
      placeholder={placeholder}
      // className='text-light'
      // light
      />
      {/* <ErrorMessage component="div" name={field.name} className="error" /> */}
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

export const DateField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
     <DatePicker datePickerType="single">
                                   <DatePickerInput
                                   {...field} {...props}
                                     placeholder="mm/dd/yyyy"
                                     labelText={label}
                    invalid={meta.touched && meta.error && 'true'}

                                     id="date-picker-single"
                                   />
                                 </DatePicker>
    </div>
  )
}