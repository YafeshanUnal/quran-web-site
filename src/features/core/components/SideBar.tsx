import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to open/close sidebar */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
          onClick={toggleSidebar}
        >
          Open Sidebar
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            className="p-2 rounded-md bg-gray-800 text-white absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            Close
          </button>
        )}

        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Sidebar Content</h2>
          <ul>
            <li className="py-2">Item 1</li>
            <li className="py-2">Item 2</li>
            <li className="py-2">Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
