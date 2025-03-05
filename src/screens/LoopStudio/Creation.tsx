import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgEarth from "@/assets/loopstudios/desktop/image-deep-earth.jpg";
import imgEarthM from "@/assets/loopstudios/mobile/image-deep-earth.jpg";
import imgNight from "@/assets/loopstudios/desktop/image-night-arcade.jpg";
import imgNightM from "@/assets/loopstudios/mobile/image-night-arcade.jpg";
import imgSoccer from "@/assets/loopstudios/desktop/image-soccer-team.jpg";
import imgSoccerM from "@/assets/loopstudios/mobile/image-soccer-team.jpg";
import imgGrid from "@/assets/loopstudios/desktop/image-grid.jpg";
import imgGridM from "@/assets/loopstudios/mobile/image-grid.jpg";
import imgFromAbove from "@/assets/loopstudios/desktop/image-from-above.jpg";
import imgFromAboveM from "@/assets/loopstudios/mobile/image-from-above.jpg";
import imgPocketBorealis from "@/assets/loopstudios/desktop/image-pocket-borealis.jpg";
import imgPocketBorealisM from "@/assets/loopstudios/mobile/image-pocket-borealis.jpg";
import imgCuriosity from "@/assets/loopstudios/desktop/image-curiosity.jpg";
import imgCuriosityM from "@/assets/loopstudios/mobile/image-curiosity.jpg";
import imgFisheye from "@/assets/loopstudios/desktop/image-fisheye.jpg";
import imgFisheyeM from "@/assets/loopstudios/mobile/image-fisheye.jpg";

const CreationComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Creation section */}
      <section id="creation">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* Creation Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl font-light">
              Our Creations
            </h2>
            <button className="hidden btn md:block">
              See All
            </button>
          </div>
          {/* Items */}
          <div className="creation-container">
            {/* Item 1 */}
            <div className="group item">
              <img src={imgEarth} alt="Image 1"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgEarthM} alt="Image 1"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">Deep Earth</h5>
            </div>

            {/* Item 2 */}
            <div className="group item">
              <img src={imgNight} alt="Image 2"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgNightM} alt="Image 2"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">Night Arcade</h5>
            </div>

            {/* Item 3 */}
            <div className="group item">
              <img src={imgSoccer} alt="Image 3"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgSoccerM} alt="Image 3"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">Socker Team VR</h5>
            </div>

            {/* Item 4 */}
            <div className="group item">
              <img src={imgGrid} alt="Image 4"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgGridM} alt="Image 4"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">The Grid</h5>
            </div>
          </div>

          <div className="creation-container mt-8">
            {/* Item 5 */}
            <div className="group item">
              <img src={imgFromAbove} alt="Image 5"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgFromAboveM} alt="Image 5"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">From Up Above VR</h5>
            </div>

            {/* Item 6 */}
            <div className="group item">
              <img src={imgPocketBorealis} alt="Image 6"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgPocketBorealisM} alt="Image 6"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">Pocket Borealis</h5>
            </div>

            {/* Item 7 */}
            <div className="group item">
              <img src={imgCuriosity} alt="Image 7"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgCuriosityM} alt="Image 7"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">The Curiosity</h5>
            </div>

            {/* Item 8 */}
            <div className="group item">
              <img src={imgFisheye} alt="Image 8"
                   className="hidden w-full duration-200 md:block group-hover:scale-110"/>
              <img src={imgFisheyeM} alt="Image 8"
                   className="w-full md:hidden"/>
              <div className="bg-item"></div>
              <h5 className="text-item">Make It Fisheye</h5>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

CreationComponent.displayName = "Creation";

export const Creation = memo(CreationComponent);
