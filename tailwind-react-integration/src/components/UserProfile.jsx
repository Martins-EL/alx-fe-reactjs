import React from "react";
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm np mx-auto, my-20 rounded-lg shadow-lg md:p-8 sm:p-4 max-w-xs md:max-w-sm  sm:text-sm  md:text-base sm:w-24 h-24 md:w-36 h-36">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="s
        rounded-full
        w-36
        h-36
        mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
