import React, {memo, useState} from 'react';
import {Fragment} from "@/components";

function validURL(str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return pattern.test(str)
}

const ShortenComponent: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [validUrl, setValidUrl] = useState<boolean>(true);

  const doShorten = () => {
    if (validURL(url)) {
      console.log('Valid ' + url);
      setValidUrl(true);
    } else {
      console.log('Wrong ' + url);
      setValidUrl(false);
    }
  }

  return (
    <Fragment>
      {/* Shorten section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form */}
          <div
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-dark-violet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              value={url}
              onChange={e => setUrl(e.target.value)}
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none border-red bg-white"
              placeholder="Shorten a link here"
              id="link-input"
            />

            <button
              onClick={doShorten}
              className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyan-light focus:outline-none md:py-2"
            >
              Shorten It!
            </button>

            {/* Error message */}
            <div
              className={"absolute left-10 bottom-3 text-red text-sm italic " + (validUrl ? "hidden" : "") }
            >
              Please enter something
            </div>
          </div>

          {/* Link 1 */}
          <div
            className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
          >
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://frontendmentor.io
            </p>

            <div
              className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://rel.ink/k4IKyk</div>
              <button
                className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div
            className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
          >
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://twitter.com/frontendmentor
            </p>

            <div
              className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://rel.ink/gxOXp9</div>
              <button
                className="p-2 px-8 text-white bg-dark-violet rounded-lg hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div
            className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
          >
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>

            <div
              className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://rel.ink/gob3X9</div>
              <button
                className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

ShortenComponent.displayName = "Shorten";

export const Shorten = memo(ShortenComponent);
