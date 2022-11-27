// import { useState } from 'react';
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid'

import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GiftExpertApp = () => {

  // Hook: useState, incializar con []
  const [categories, setCategories] = useState(['Rain'])

  // handleAddCategory
  const onAddCategory = (NewCategory) => {
    // console.log(NewCategory)
    // categories.push(NewCategory)
    // setCategories( [ ...categories, 'valorant' ] );
    // setCategories( cat => [ ...cat, 'valorant' ] );
    // setCategories( cat => [ 'Valorant', ...cat ] );

    if ( categories.includes(NewCategory)) return;

    setCategories([ NewCategory, ...categories ] );
  }

  return (
    <>
      GifExpertApp
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ value => onAddCategory(value) }
        // onNewCategory={ onAddCategory } // Forma usada
      />
      { 
        categories.map((category) => ( 
          <GifGrid 
            key={ category } 
            category={ category }
          /> 
        ))
      }
    </>
  )
}
