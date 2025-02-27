import React, {memo} from 'react';
import {Fragment} from "@/components";
import img from "@/assets/images/image.jpg";
import "./email-subscribe.css";

const EmailSubscribeComponent: React.FC = () => {
  return (
    <Fragment>
      <div className="center-box">
        <div className="center bg-zinc-800 rounded-xl">
          <div className="subscribe-box">
            <img src={img} alt="Subscribe logo" />
            <div>
              <h2>Get diet and fitness tips in your inbox</h2>
              <p>
                Eat better and exercise better. Sign up for the Diet&amp;Fitness
                newsletter.
              </p>
              <div>
                <input type="text" placeholder="Enter your email address" className="tfd"/>
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EmailSubscribeComponent.displayName = "EmailSubscribe";

export const EmailSubscribe = memo(EmailSubscribeComponent);
