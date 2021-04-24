import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/use-mode";

const Layout = ({ children, renderInSlot, renderInActionSlot }) => {
  const [isModeDark, setIsModeDark] = useDarkMode("light");

  return (
    <main className="bg-light-primary dark:bg-dark-secondary">
      <div className="p-3 w-full sm:max-w-5xl mx-auto">
        <header className="flex flex-col border-b-2 mb-4">
          <div className="flex flex-row justify-between my-5 text-light-primary dark:text-dark-primary">
            <Link className="text-3xl font-extrabold text-color-primary" to="/">
              Bishwendu
            </Link>
            <button
              className="hover:text-dark-accent"
              onClick={() => setIsModeDark(!isModeDark)}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 md:w-5 md:h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center text-lg mb-5 text-light-secondary dark:text-dark-primary">
            {renderInSlot && renderInSlot()}
            {renderInActionSlot && renderInActionSlot()}
          </div>
        </header>
        {children}
      </div>
    </main>
  );
};

const SocialLink = () => (
  <span className="w-1/2 md:w-1/6 flex flex-row justify-between dark:text-dark-accent font-bold">
    <a href="https://twitter.com" target="_blank">
      Twitter
    </a>
    <a href="https://github.com/bishwenduk029" target="_blank">
      Github
    </a>
  </span>
);

export default Layout;
