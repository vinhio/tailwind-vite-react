import React, {memo} from 'react';
import {Fragment} from "@/components";
import {Header} from "@/screens/Fylo";

const FyloScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

FyloScreenComponent.displayName = "Fylo";

export const FyloScreen = memo(FyloScreenComponent);
