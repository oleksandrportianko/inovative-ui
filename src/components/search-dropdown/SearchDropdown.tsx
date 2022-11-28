import { FC } from 'react'

import './SearchDropdown.css'

type SearchDropdownProps = {
    items: string[],
}

export const SearchDropdown: FC<SearchDropdownProps> = ({ items }) => {
    return (
        <div className='search-dropdown-container'>
            {
                items.map((el, idx) => {
                    return <div className='search-dropdown-item' key={idx}>{el}</div>
                })
            }
        </div>
    )
}