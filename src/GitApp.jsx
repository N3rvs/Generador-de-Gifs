import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1><img src="/src/img/logonervs.png" alt=""/> </h1>
      <h1>Generador de Gifs</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory= {onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
