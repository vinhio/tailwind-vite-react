import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  Download,
  Feature,
  Footer,
  Header, Hero,
} from "@/screens/Bookmark";

const BookmarkScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Feature/>
      <Download/>
      <Footer/>
    </Fragment>
  );
};

BookmarkScreenComponent.displayName = "Bookmark";

export const BookmarkScreen = memo(BookmarkScreenComponent);
