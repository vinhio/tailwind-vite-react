import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Footer, Header, Hero, Shorten} from "@/screens/Shortly";

const ShortlyScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Header section */}
      <Header/>
      {/* Hero section */}
      <Hero/>
      {/* Shorten section */}
      <Shorten/>
      {/* Footer section */}
      <Footer/>
    </Fragment>
  );
};

ShortlyScreenComponent.displayName = "Shortly";

export const ShortlyScreen = memo(ShortlyScreenComponent);
