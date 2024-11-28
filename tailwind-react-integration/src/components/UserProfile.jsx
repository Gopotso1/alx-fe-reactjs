import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg mx-auto sm:p-4 md:p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="User Profile" 
          className="sm:w-24 sm:h-24 w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-gray-300 transition-transform duration-300 ease-in-out hover:scale-110"
        />

        {/* User Information */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 ease-in-out">
            John Doe
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            A passionate developer and tech enthusiast who loves building amazing things. Currently exploring React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;