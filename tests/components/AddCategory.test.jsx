import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

  test('debe de cambiar el valor de la caja de texto', () => { 

    render( <AddCategory onNewCategory={ () => {} }/>);
    const input = screen.getByRole('textbox'); // search input, traer valor desde input

    fireEvent.input( input, { target: { value: 'Saitama' } } )

    expect(input.value).toEqual('Saitama');
    // screen.debug();
  })


  test('debe de llamar onNewCategory si el input tiene un valor', () => { 

    const inputValue = 'Saitama';
    // JEST MOCK: simulacion de la funcion, cn el control de ella
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/>);

    // Buscar valor de input sea igual al inputValue simulado en testing
    const input = screen.getByRole('textbox'); 
    const form = screen.getByRole('form');

    // Disparar evento: Cambiar valor de la caja de texto
    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );
    // screen.debug()

    expect(input.value).toBe('')

    // Evaluar function onNewCategory: si se llamo la funcion sobre el valor simulado (inputValue)
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  })

  test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory }/>);

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

  })

})