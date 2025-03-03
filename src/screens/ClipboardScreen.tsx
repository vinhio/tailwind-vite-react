import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Hero} from "@/screens/Clipboard/Hero";
import {Snippet} from "@/screens/Clipboard/Snippet";

const ClipboardScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
      {/* Snippets section */}
      <Snippet/>
    </Fragment>
  );
};

ClipboardScreenComponent.displayName = "Clipboard";

export const ClipboardScreen = memo(ClipboardScreenComponent);
