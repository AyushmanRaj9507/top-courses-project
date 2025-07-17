import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [darkMode, setDarkMode] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    setLoading(true);
    setError(false);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      setError(true);
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-bgDark2" : "bg-white"}`}>
      <button
        className="absolute right-4 top-4 bg-gray-500 text-white px-2 py-1 rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Theme
      </button>

      <Navbar likedCoursesCount={0} />

      <div className="bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading
              ? (<Spinner message="Fetching courses..." />)
              : error
                ? (<button onClick={fetchData} className="bg-red-500 text-white px-4 py-2 rounded">Retry</button>)
                : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

      <footer className="text-center py-4 text-gray-400">
        © 2025 My Courses App. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
