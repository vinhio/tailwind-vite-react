import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Feature, Hero} from "@/screens/LoopStudio";

const LoopStudioScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
      {/* Feature section */}
      <Feature/>
    </Fragment>
  );
};

LoopStudioScreenComponent.displayName = "LoopStudio";

export const LoopStudioScreen = memo(LoopStudioScreenComponent);
