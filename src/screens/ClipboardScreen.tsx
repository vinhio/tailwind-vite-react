import React, {memo} from 'react';
import {Fragment} from "@/components";
import "./Clipboard/clipboard.css";
import {Hero} from "@/screens/Clipboard/Hero";

const ClipboardScreenComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Hero section */}
      <Hero/>
    </Fragment>
  );
};

ClipboardScreenComponent.displayName = "Clipboard";

export const ClipboardScreen = memo(ClipboardScreenComponent);
