import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  Download, FAQ,
  Feature,
  Footer,
  Header, Hero, NewsLetter,
} from "@/screens/Bookmark";

const BookmarkScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Feature/>
      <Download/>
      <FAQ/>
      <NewsLetter/>
      <Footer/>
    </Fragment>
  );
};

BookmarkScreenComponent.displayName = "Bookmark";

export const BookmarkScreen = memo(BookmarkScreenComponent);
