import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:p-4 md:p-8 lg:p-12">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="User Profile" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-gray-300"
        />

        {/* User Info */}
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            A passionate developer and tech enthusiast who loves building amazing things. Currently exploring React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;