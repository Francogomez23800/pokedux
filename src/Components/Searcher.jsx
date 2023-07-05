import React, { useState } from 'react';

const Searcher = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='w-full flex justify-center'>
      <input
        placeholder='Buscar...'
        className='bg-gray-50 p-2 w-[250px] rounded-xl outline-none shadow-lg shadow-gray-300'
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Searcher;
