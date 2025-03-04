import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  Hero,
  Snippet,
  Feature,
  Access,
  Workflow,
  Brands
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
    </Fragment>
  );
};

ClipboardScreenComponent.displayName = "Clipboard";

export const ClipboardScreen = memo(ClipboardScreenComponent);
