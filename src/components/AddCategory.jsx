import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    // console.log(event.target.value);
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault(); // evitar el refresh de la pagina
    // console.log(inputValue)

    if ( inputValue.trim().length <= 1 ) return; // obj: salir de la funcion y n se siga ejecutando

    // setCategories( (categories) => [ inputValue, ...categories ])
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ (event) => onSubmit(event) } >
      <input 
        type="text"
        placeholder="Search Gifts"
        value={ inputValue }
        // onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
      />
    </form>
  )
}
