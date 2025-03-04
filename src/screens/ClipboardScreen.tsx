import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  Hero,
  Snippet,
  Feature,
  Access,
  Workflow,
  Brands,
  Download, Footer
} from "@/screens/Clipboard";

const ClipboardScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
      {/* Snippets section */}
      <Snippet/>
      {/* Feature section */}
      <Feature/>
      {/* Access section */}
      <Access/>
      {/* Workflow section */}
      <Workflow/>
      {/* Brands section */}
      <Brands/>
      {/* Download section */}
      <Download/>
      {/* Footer section */}
      <Footer/>
    </Fragment>
  );
};

ClipboardScreenComponent.displayName = "Clipboard";

export const ClipboardScreen = memo(ClipboardScreenComponent);
