import React from 'react'

export const InputField = (props) => {
  return (
     <div className="form-floating">
     
     <input 
     type={props.type} 
     className="form-control" 
     id={props.id} 
     name={props.name}
     placeholder={props.placeholder}
     value={props.value}
     onChange={props.onChange} 
     onBlur={props.onBlur}
     />
     
     <label htmlFor={props.id}>
        {props.label}
     </label>
     </div>
  )
}
