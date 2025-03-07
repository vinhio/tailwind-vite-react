import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Cta, Feature, Footer, Header, Hero, Shorten} from "@/screens/Shortly";

const ShortlyScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Header section */}
      <Header/>
      {/* Hero section */}
      <Hero/>
      {/* Shorten section */}
      <Shorten/>
      {/* Feature section */}
      <Feature/>
      {/* CTA section */}
      <Cta/>
      {/* Footer section */}
      <Footer/>
    </Fragment>
  );
};

ShortlyScreenComponent.displayName = "Shortly";

export const ShortlyScreen = memo(ShortlyScreenComponent);
