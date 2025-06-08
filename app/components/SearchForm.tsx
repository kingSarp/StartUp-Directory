import React from 'react';
import Form from 'next/form';

const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        placeholder="Search for startups, investors, or ideas..."
        className="search-input"    
        />

    </Form>
  )
}

export default SearchForm