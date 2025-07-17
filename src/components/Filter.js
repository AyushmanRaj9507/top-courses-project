import React from 'react';

const FilterButton = ({ data, category, filterHandler }) => (
  <button
    className={`text-lg px-2 py-1 rounded-md font-medium 
    text-white bg-black hover:scale-105 hover:bg-opacity-50 border-2 transition-all duration-300
    ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
    onClick={() => filterHandler(data.title)}
  >
    {data.title}
  </button>
);

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {
        filterData.map(data => (
          <FilterButton key={data.id} data={data} category={category} filterHandler={filterHandler} />
        ))
      }
    </div>
  )
}

export default Filter;
