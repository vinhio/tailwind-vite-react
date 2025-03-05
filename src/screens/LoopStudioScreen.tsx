import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Creation, Feature, Footer, Hero} from "@/screens/LoopStudio";

const LoopStudioScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
      {/* Feature section */}
      <Feature/>
      {/* Creation section */}
      <Creation/>
      {/* Footer section */}
      <Footer/>
    </Fragment>
  );
};

LoopStudioScreenComponent.displayName = "LoopStudio";

export const LoopStudioScreen = memo(LoopStudioScreenComponent);
