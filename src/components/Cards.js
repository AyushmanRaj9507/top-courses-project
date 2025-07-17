import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  }

  const data = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {
        data.length === 0
          ? <p className="text-white">No courses found!</p>
          : data.map(course => (
            <div key={course.id} className="bg-gray-800 p-4 rounded-md">
              <Card
                course={course}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
              />
              <button
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                onClick={() => alert("Share feature coming soon!")}
              >
                Share
              </button>
            </div>
          ))
      }
    </div>
  )
}

export default Cards;
