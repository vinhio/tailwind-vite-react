import React, {memo} from 'react';
import {Fragment} from "@/components";
import "./image-gallery.css";
import imgBookmark from "@/assets/bookmark.svg";
import img1 from "@/assets/images/image1.jpg";
import img2 from "@/assets/images/image2.jpg";
import img3 from "@/assets/images/image3.jpg";
import img4 from "@/assets/images/image4.jpg";
import img5 from "@/assets/images/image5.jpg";
import img6 from "@/assets/images/image6.jpg";

const ImageGalleryComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="center-box">
        <div className="center">
          <div className="image-gallery">
            <div data-desc="Navigator"
              className="navigator"
            >
              <ul>
                <li>
                  <a href="#">Vector</a>
                </li>
                <li>
                  <a href="#">Illustrations</a>
                </li>
                <li>
                  <a href="#">Images</a>
                </li>
                <li>
                  <a href="#">Icons</a>
                </li>
              </ul>
            </div>

            <div data-desc="Search"
                 className="search">
              <div className="search-text">
                <input type="text" placeholder="Search"/>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 text-gray-300 duration-200 hover:scale-110"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7"/>
                    <line x1="21" y1="21" x2="15" y2="15"/>
                  </svg>
                </button>
              </div>
              <button
                className="search-button">
                Upload
              </button>
            </div>

            <div data-desc="Grid"
                 className="search-grid">

              <div className="relative group">
                <img src={img1} alt="" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <img src={img2} alt="Image" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item relative group">
                <img src={img3} alt="Image" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item relative group">
                <img src={img4} alt="Image" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item relative group">
                <img src={img5} alt="Image" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-item relative group">
                <img src={img6} alt="Image" className="w-72"/>
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
                >
                  <div className="flex justify-between w-full">
                    <div className="font-normal">
                      <p className="text-sm">Abstract Painting</p>
                      <p className="text-xs">245 likes - 35 Shares</p>
                    </div>
                    <div className="flex items-center">
                      <img src={imgBookmark} alt="bookmark"/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ImageGalleryComponent.displayName = "ImageGallery";

export const ImageGallery = memo(ImageGalleryComponent);
