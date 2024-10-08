import React, { useState } from 'react';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tooltip, setTooltip] = useState(null);

  const handleDarkMode = () => setIsDarkMode(true);
  const handleLightMode = () => setIsDarkMode(false);

  const showTooltip = (label) => setTooltip(label);
  const hideTooltip = () => setTooltip(null);

  return (
    <div
      className={`w-[100vw] h-[100vh] flex justify-center items-center ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-400'
      }`}
    >
      <div
        className={`w-12 ${
          isDarkMode ? 'bg-slate-950 border' : 'bg-zinc-200 border border-stone-700'
        } rounded-full pt-2 pb-2 absolute flex flex-col gap-3 items-center p-2`}
      >
        {/* Dark Mode Icon */}
        <div
          onMouseEnter={() => showTooltip('Dark')}
          onMouseLeave={hideTooltip}
          onClick={handleDarkMode}
          className={`relative group w-8 h-8 p-1 ${
            isDarkMode ? 'bg-white text-slate-800' : 'text-black'
          }  rounded-full transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          {tooltip === 'Dark' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4 bg-gray-700 text-white rounded-full shadow-lg">
              Dark
            </div>
          )}
        </div>

        {/* Light Mode Icon */}
        <div
          onMouseEnter={() => showTooltip('Light')}
          onMouseLeave={hideTooltip}
          onClick={handleLightMode}
          className={`relative group w-8 h-8 p-1 ${
            !isDarkMode ? 'bg-white text-slate-800' : 'text-white'
          }  rounded-full transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          {tooltip === 'Light' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4 bg-gray-700 text-white rounded-full shadow-lg">
              Light
            </div>
          )}
        </div>

        <div className={`h-0.5 w-full rounded-full ${isDarkMode ? 'bg-white':'bg-black'}`}></div>

        {/* Home Icon */}
        <div
          onMouseEnter={() => showTooltip('Home')}
          onMouseLeave={hideTooltip}
          className={`relative group w-8 h-8 p-1 ${
            isDarkMode?'text-white':'text-black'
          }  rounded-full hover:text-black hover:bg-white transition duration-300 ease-in-out `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          {tooltip === 'Home' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4 bg-gray-700 text-white rounded-full shadow-lg">
              Home
            </div>
          )}
        </div>

        {/* Document Icon */}
        <div
          onMouseEnter={() => showTooltip('Document')}
          onMouseLeave={hideTooltip}
          className={`relative group w-8 h-8 p-1 ${
            isDarkMode?'text-white':'text-black'
          }  rounded-full hover:text-black hover:bg-white transition duration-300 ease-in-out `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          {tooltip === 'Document' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4 bg-gray-700 text-white rounded-full shadow-lg">
              Document
            </div>
          )}
        </div>

        {/* Email Icon */}
        <div
          onMouseEnter={() => showTooltip('Email')}
          onMouseLeave={hideTooltip}
          className={`relative group w-8 h-8 p-1 ${
            isDarkMode?'text-white':'text-black'
          }  rounded-full hover:text-black hover:bg-white transition duration-300 ease-in-out `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          {tooltip === 'Email' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4 bg-gray-700 text-white rounded-full shadow-lg">
              Email
            </div>
          )}
        </div>

        {/* Settings Icon */}
        <div
          onMouseEnter={() => showTooltip('Settings')}
          onMouseLeave={hideTooltip}
          className={`relative group w-8 h-8 p-1 ${
            isDarkMode?'text-white':'text-black'
          }  rounded-full hover:text-black hover:bg-white transition duration-300 ease-in-out `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          {tooltip === 'Settings' && (
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 px-4  bg-gray-700 text-white rounded-full shadow-lg">
              Settings
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
