import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Hero, Snippet, Feature} from "@/screens/Clipboard";

const ClipboardScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
      {/* Snippets section */}
      <Snippet/>
      {/* Feature section */}
      <Feature/>
    </Fragment>
  );
};

ClipboardScreenComponent.displayName = "Clipboard";

export const ClipboardScreen = memo(ClipboardScreenComponent);
