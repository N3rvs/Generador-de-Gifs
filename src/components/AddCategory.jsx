import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onChangeInput = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {

        // Evita mandar inputs vacios
        const valueTrim = inputValue.trim();

        // Para que no se refersque el formulario por defecto
        event.preventDefault()
        if (valueTrim.length <= 1) return;
        // setCategories(categories=>[inputValue,...categories])
        onNewCategory(valueTrim)
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChangeInput}
            />
        </form>

    )
}
