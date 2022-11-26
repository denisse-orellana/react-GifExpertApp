import PropTypes from 'prop-types';  

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  // console.log({ isLoading })

  return (
    <>
      <h3>{ category }</h3>

      {/* 1era forma de loading */}
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      {/* 2da forma de loadingc */}
      {/* {
        isLoading
        ? ( <h2>Cargando...</h2> )
        : null
      } */}

      <div className="card-grid">
        {
          // images.map( ( ( image ) ) => (
          //   <GifItem 
          //     key={image.id} 
          //     title={image.title}
          //     url={image.url}
          //   />
          // ))
        // }
          images.map( (image) => (
            <GifItem 
              key={ image.id } 
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

/*
  Nunca ejecutar una funcion dentro de un functional component
*/

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}