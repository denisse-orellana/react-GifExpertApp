import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

  const category = 'One Punch';

  test('debe de mostrar el loading inicialmenent', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    
    render( <GifGrid category={ category } /> )
    // screen.debug()

    expect( screen.getByText( 'Cargando...' ) );
    expect( screen.getByText( category ) );

  })

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

    const gifs = [
      {
        id: 'ABC', 
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: 'DEF', 
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render( <GifGrid category={ category } /> )
    // screen.debug()

    expect( screen.getAllByRole('img').length ).toBe(2)
  })

})