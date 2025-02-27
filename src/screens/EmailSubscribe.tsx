import React, {memo} from 'react';
import {Fragment} from "@/components";

const EmailSubscribeComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen bg-zinc-700">
        <div className="bg-zinc-200 p-2 m-6 rounded-2xl">
          Hello world
        </div>
      </div>
    </Fragment>
  );
};

EmailSubscribeComponent.displayName = "EmailSubscribe";

export const EmailSubscribe = memo(EmailSubscribeComponent);
