import React from "react";
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm np mx-auto, my-20 rounded-lg shadow-lg md:p-8 sm:p-4 max-w-xs md:max-w-sm  sm:text-sm  md:text-base sm:w-24 h-24 md:w-36 h-36 sm:text-lg md:text-xl sm:h-24 md:h-36 hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="s
        rounded-full
        w-36
        h-36
        mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
