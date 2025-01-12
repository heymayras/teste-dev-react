import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white text-gray-600">
      <div className="flex w-full items-center justify-between px-7 py-6 md:px-14 2xl:px-20 min-[1690px]:px-24 min-[1750px]:px-28">
        {/*LOGO*/}
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 367.35 143.36"
            className="w-32 fill-black md:w-24 lg:w-32"
          >
            <path
              d="M33.45 80.03v-5.25H44.3v41.35c0 5.74-1.88 10.45-5.63 14.11-3.76 3.66-8.87 5.5-15.33 5.5-6.13 0-10.9-1.61-14.29-4.84-3.4-3.23-5.29-6.84-5.68-10.83h11.77c.77 3.77 3.56 5.66 8.37 5.66 2.93 0 5.16-.74 6.71-2.21 1.55-1.48 2.32-3.53 2.32-6.15v-5.99c-2.82 3.72-7.04 5.58-12.68 5.58-5.91 0-10.69-2.06-14.33-6.19-3.65-4.13-5.47-9.26-5.47-15.38 0-6.13 1.82-11.25 5.47-15.38s8.42-6.19 14.33-6.19c6.18-.03 10.71 2.05 13.59 6.21m-3.48 23.54c1.93-2.08 2.9-4.81 2.9-8.2s-.97-6.13-2.9-8.2q-2.895-3.12-7.62-3.12t-7.62 3.12c-1.93 2.08-2.9 4.81-2.9 8.2s.97 6.13 2.9 8.2c1.93 2.08 4.48 3.12 7.62 3.12q4.71 0 7.62-3.12M74.78 74.45v10.91c-.83-.16-1.6-.25-2.32-.25-3.48 0-6.09.9-7.83 2.71s-2.61 4.65-2.61 8.53v21.41H50.26V74.78h10.85v5.58c2.49-3.99 6.57-5.99 12.26-5.99zM116.54 112.23c-4.2 4.35-9.69 6.52-16.49 6.52s-12.29-2.17-16.49-6.52q-6.3-6.525-6.3-15.96t6.3-15.96c4.2-4.35 9.69-6.52 16.49-6.52 6.79 0 12.29 2.17 16.49 6.52q6.3 6.525 6.3 15.96t-6.3 15.96m-24.4-24.9c-2.07 2.19-3.11 5.17-3.11 8.94s1.04 6.76 3.11 8.94c2.07 2.19 4.71 3.28 7.91 3.28s5.84-1.09 7.91-3.28 3.11-5.17 3.11-8.94-1.04-6.75-3.11-8.94-4.71-3.28-7.91-3.28-5.84 1.09-7.91 3.28M155.96 99.23V74.78h11.77v42.99h-10.85v-5.25c-2.27 4.16-6.52 6.24-12.76 6.24-5.08 0-8.99-1.54-11.72-4.64-2.73-3.09-4.1-7.26-4.1-12.51V74.78h11.77v25.51c0 5.63 2.4 8.45 7.21 8.45 2.87 0 5.04-.82 6.5-2.46 1.44-1.64 2.18-3.99 2.18-7.05M185.06 113.17v21.66h-11.77V74.78h10.86v5.25c2.87-4.16 7.46-6.24 13.75-6.24 6.13 0 10.99 2.13 14.58 6.4s5.39 9.63 5.39 16.08-1.8 11.81-5.39 16.08-8.45 6.4-14.58 6.4c-2.87 0-5.43-.53-7.66-1.6-2.24-1.06-3.97-2.39-5.18-3.98m2.61-25.68c-1.96 2.3-2.94 5.22-2.94 8.78s.98 6.48 2.94 8.78 4.54 3.45 7.75 3.45c3.2 0 5.79-1.15 7.75-3.45s2.94-5.22 2.94-8.78c0-3.55-.98-6.48-2.94-8.78s-4.54-3.45-7.75-3.45c-3.21.01-5.79 1.16-7.75 3.45M49.28 17.91c-6.48 0-11.81 2.18-15.98 6.53s-6.25 9.79-6.25 16.32c0 6.75 2.08 12.28 6.25 16.57 4.17 4.3 9.52 6.44 16.06 6.44 5.07 0 9.51-1.38 13.31-4.14s6.35-6.37 7.65-10.84H58.25c-.68 1.56-1.79 2.75-3.34 3.56s-3.28 1.21-5.2 1.21c-3.04 0-5.5-.79-7.35-2.39-1.86-1.59-2.99-3.89-3.38-6.91H71.1l.17-3.52c0-6.58-2.04-12.04-6.13-16.36-4.09-4.3-9.38-6.47-15.86-6.47M39.14 35.74c.51-2.57 1.63-4.59 3.38-6.07s3.97-2.22 6.68-2.22c2.76 0 5.02.75 6.76 2.26q2.625 2.265 3.3 6.03zM111.37 22.18c-3.27-2.85-8.11-4.27-14.54-4.27-6.48 0-11.33 1.45-14.54 4.35s-5.02 6.5-5.41 10.8h11.83c.51-3.57 3.13-5.36 7.86-5.36 5.3 0 7.95 2.07 7.95 6.19v1.84h-8.79c-6.71 0-11.69 1.1-14.96 3.31s-4.9 5.79-4.9 10.76c0 4.13 1.27 7.49 3.8 10.09 2.54 2.59 6.45 3.89 11.75 3.89 6.93 0 11.67-1.95 14.2-5.86v4.85h10.65V34.23c.01-5.19-1.63-9.2-4.9-12.05m-6.84 23.02c0 3.07-.77 5.4-2.32 6.99s-4.21 2.38-7.99 2.38c-4.51 0-6.76-1.59-6.76-4.77 0-2.12.8-3.5 2.41-4.14s4.1-.96 7.48-.96h7.19v.5zM146.54 17.91c-6.48 0-10.88 2.12-13.19 6.36v-5.36h-11.07v43.86h12V37.66q0-4.44 2.37-6.99c1.58-1.7 3.8-2.55 6.68-2.55 5.02 0 7.52 2.87 7.52 8.62v26.03h12V35.41c0-5.36-1.41-9.61-4.23-12.76-2.81-3.16-6.84-4.74-12.08-4.74M215.08 47.86l-9.18-28.94h-11.18l-9.13 28.87-8.87-28.87h-12.43l15.47 43.85h10.75l9.06-27.26.65.14 8.96 27.12h11.24l15.47-43.85h-12.17zM259.56 17.91c-6.93 0-12.54 2.22-16.82 6.65-4.28 4.44-6.42 9.86-6.42 16.28s2.14 11.84 6.42 16.28 9.89 6.65 16.82 6.65 12.54-2.22 16.82-6.65c4.28-4.44 6.43-9.86 6.43-16.28s-2.14-11.84-6.43-16.28c-4.28-4.43-9.89-6.65-16.82-6.65m8.07 32.06c-2.11 2.23-4.81 3.35-8.07 3.35-3.27 0-5.96-1.12-8.07-3.35s-3.17-5.27-3.17-9.12 1.06-6.89 3.17-9.12 4.8-3.35 8.07-3.35 5.96 1.12 8.07 3.35 3.17 5.27 3.17 9.12-1.05 6.89-3.17 9.12M298.4 24.61v-5.69h-11.07v43.86h12V40.93c0-3.96.89-6.86 2.66-8.7s4.44-2.76 7.99-2.76c.73 0 1.52.08 2.37.25V18.58l-1.44-.08c-5.8 0-9.97 2.04-12.51 6.11M343.44 38.08l16.24-18.3h-14.75l-15.82 19.53V0h-11.77v62.77h11.77v-9.59l6.54-7.39 11.27 16.98h13.92zM12 39.84V0H0v40.059999999999995c.05 6.32 2.19 11.67 6.42 16.06 4.28 4.44 9.89 6.65 16.82 6.65V52.31c-3.27 0-5.96-1.12-8.07-3.35S12 43.69 12 39.84"
              class="st0"
            ></path>
          </svg>
        </a>

        {/* SEARCH BAR   viewBox="0 0 192.904 192.904"*/}
        <div className="flex px-4 py-3 rounded-md border-2 border-black overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="O que você procura..."
            class="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>

        <nav className="flex items-center gap-x-8 lg:gap-x-16">
          <ul className="hidden items-center gap-x-8 text-sm font-medium md:flex lg:gap-x-14 lg:text-base">
            {/* HOME BUTTON */}
            <li>
              <a href="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
            {/* LOGIN BUTTON */}
            <li>
              <a href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              {" "}
              {/* SHOPPING CART BUTTON */}
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
