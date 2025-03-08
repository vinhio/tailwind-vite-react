import React, {memo} from 'react';
import {Fragment} from "@/components";
import {
  Footer,
  Header,
} from "@/screens/Bookmark";

const BookmarkScreenComponent: React.FC = () => {
  return (
    <Fragment>
      <Header/>
      <Footer/>
    </Fragment>
  );
};

BookmarkScreenComponent.displayName = "Bookmark";

export const BookmarkScreen = memo(BookmarkScreenComponent);
