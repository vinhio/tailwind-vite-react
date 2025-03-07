import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Header, Hero} from "@/screens/Fylo";

const FyloScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Hero/>
    </Fragment>
  );
};

FyloScreenComponent.displayName = "Fylo";

export const FyloScreen = memo(FyloScreenComponent);
