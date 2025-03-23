import React, { memo, useRef, useState } from "react";
import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assets/react.svg";
import tailwindLogo from "@/assets/tailwind.svg";
import { Fragment } from "@/components";
import { Camera } from "lucide-react";
import { Button, ButtonKind, ButtonState } from "@/components/ui";

const HomeComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<null | HTMLButtonElement>(null);

  const handleClick = React.useCallback(() => ref.current?.click(), []);

  return (
    <Fragment>
      <div className="center-box">
        <div className="center">
          <div className="columns-3 p-12">
            <a href="https://vite.dev" target="_blank" className="">
              <img
                src={viteLogo}
                className="logo animate-bounce"
                alt="Vite logo"
              />
            </a>
            <a href="https://react.dev" target="_blank" className="">
              <img
                src={reactLogo}
                className="logo animate-spin-slow"
                alt="React logo"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="">
              <img
                src={tailwindLogo}
                className="logo animate-pulse"
                alt="Tailwind logo"
              />
            </a>
          </div>
          <h1 className="text-5xl leading-tight">Vite + React + Tailwind</h1>
          <div className="p-9">
            <button
              className="btn mb-4"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="text-zinc-500">
            Click on the Vite and React logos to learn more
          </p>
          <div className={`mt-4 flex justify-center space-x-2`}>
            <Button
              ref={ref}
              onClick={() => console.log("Hello world")}
              icon={<Camera />}
              variant={"outline"}
            >
              Primary
            </Button>
            <Button
              state={ButtonState.disabled}
              kind={ButtonKind.icon}
              icon={
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              variant={"default"}
              size={"sm"}
            >
              Secondary
            </Button>
            <div onClick={handleClick} className={`cursor-pointer`}>
              Client me
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HomeComponent.displayName = "Home";

export const Home = memo(HomeComponent);
