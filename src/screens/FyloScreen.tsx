import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  EarlyAccess,
  Feature,
  Header,
  Hero,
  Productive,
  Testimonials
} from "@/screens/Fylo";

const FyloScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Feature/>
      <Productive/>
      <Testimonials/>
      <EarlyAccess/>
    </Fragment>
  );
};

FyloScreenComponent.displayName = "Fylo";

export const FyloScreen = memo(FyloScreenComponent);
