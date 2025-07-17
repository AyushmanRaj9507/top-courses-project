import React from 'react';

const Navbar = ({ likedCoursesCount }) => {
  return (
    <div>
      <nav className="bg-bgDark py-4">
        <h1 className="text-3xl font-bold text-center text-white">📚 Top Courses</h1>
        <p className="text-center text-gray-300">Learn. Grow. Succeed.</p>
        <h2 className="text-center text-gray-300">❤️ Liked: {likedCoursesCount}</h2>
      </nav>
    </div>
  )
}

export default Navbar;
