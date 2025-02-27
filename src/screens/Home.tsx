import React, {memo, useState} from 'react';
import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assets/react.svg";
import tailwindLogo from "@/assets/tailwind.svg";
import {Fragment} from "@/components";

const HomeComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <div className="center-box">
        <div className="center">
          <div className="columns-3 p-12">
            <a href="https://vite.dev" target="_blank" className="">
              <img src={viteLogo} className="logo animate-bounce" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="">
              <img src={reactLogo} className="logo animate-spin-slow" alt="React logo" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="">
              <img src={tailwindLogo} className="logo animate-pulse" alt="Tailwind logo" />
            </a>
          </div>
          <h1 className="text-5xl leading-tight">Vite + React + Tailwind</h1>
          <div className="p-9">
            <button className="btn mb-4" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-zinc-500">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </Fragment>
  );
};

HomeComponent.displayName = "Home";

export const Home = memo(HomeComponent);
