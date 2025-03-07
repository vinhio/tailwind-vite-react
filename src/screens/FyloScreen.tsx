import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  EarlyAccess,
  Feature, Footer,
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
      <Footer/>
    </Fragment>
  );
};

FyloScreenComponent.displayName = "Fylo";

export const FyloScreen = memo(FyloScreenComponent);
