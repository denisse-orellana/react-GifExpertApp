//  Hook: funcion que regresa algo

import { useEffect, useState } from 'react'
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [ images, setImages ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );

  const getImages = async() => {
    const newImages = await getGifts(category);
    setImages(newImages)
    setIsLoading(false)
  }

  // useEffect: para disparar un efecto secundario, no puede regresar una promesa, deber ser una funcion
  useEffect( () => {
    getImages()
  }, [])

  return {
    images,
    isLoading
  }
}