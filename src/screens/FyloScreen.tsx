import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Feature, Header, Hero, Productive} from "@/screens/Fylo";

const FyloScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Feature/>
      <Productive/>
    </Fragment>
  );
};

FyloScreenComponent.displayName = "Fylo";

export const FyloScreen = memo(FyloScreenComponent);
