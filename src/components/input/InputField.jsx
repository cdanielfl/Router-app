import React from 'react'

export const InputField = (props) => {
  return (
     <div className="form-floating">
     
     <input 
     type={props.type} 
     className="form-control" 
     id={props.id} 
     name={props.id}
     placeholder={props.placeholder}
     value={props.value}
     onChange={props.onChange} />
     
     <label htmlFor={props.id}>
        {props.label}
     </label>
     </div>
  )
}
