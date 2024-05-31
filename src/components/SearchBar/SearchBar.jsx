import { useState } from 'react'
import css from './SearchBar.module.css'
export default function SearchBar({ onSubmit }) {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)


    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if (!query.trim()) {
            return
        }
        onSubmit(query)
        setQuery('')
    }

    return (
        <form className={css.container} >
            <input className={css.view} onChange={handleChange}
                type="text"
                placeholder="Search images and photos"
                name="name"
                value={query}
                autoFocus
                required
            />
            <button onSubmit={handleSumbit} type="submit">Search</button>
        </form>

    )
}
