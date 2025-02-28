import React, {memo} from 'react';
import {Fragment} from "@/components";
import "./product-modal.css";
import imgHeadphone from "@/assets/images/headphone.png";
import imgWeight from "@/assets/images/weight.png";
import imgHeart from "@/assets/images/heart.png";

const ProductModalComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="center-box">
        <div className="center">
          <div className="product-modal">
            <div>
              <img className="mx-auto duration-200 w-60 hover:scale-105" src={imgHeadphone} alt="Head Phone" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block bg-black text-white text-sm py-1 px-3 rounded-full tracking-tight mb-4">Free Shipping</span>
              <div className="max-w-sm text-2xl font-medium">Razer Kraken Kitty Edt Gaming Headset Quartz</div>
              <div className="my-3 max-w-sm">
                <div className="text-lg line-through">$799</div>
                <div className="text-5xl my-2 font-bold">$599</div>
                <div className="text-sm font-light text-gray-400">This offer is valid until April 3rd or as long as stock lasts!</div>
              </div>
              <div className="group">
                <button className="w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-00 group-hover:border-t-blue-700 group-hover:shadow-lg transistion-all duration-150">
                  <div className="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700 duration-150">Add to card</div>
                </button>
              </div>
              <div className="flex items-center space-x-2 mt-2 group">
                <div className="w-3 h-3 rounded-full bg-green-500 group-hover:animate-ping"></div>
                <div className="text-sm">50+ pcs. in stock</div>
              </div>
              <div className="footer">
                <button className="btn-hover">
                  <img src={imgWeight} alt="" />
                  <span>Add to cart</span>
                </button>
                <button className="btn-hover">
                  <img src={imgHeart} alt="" />
                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductModalComponent.displayName = "ProductModal";

export const ProductModal = memo(ProductModalComponent);
