import React, {memo} from 'react';
import {Fragment} from "@/components";
import imgBlacklist from "@/assets/clipboard/icon-blacklist.svg";
import imgText from "@/assets/clipboard/icon-text.svg";
import imgPreview from "@/assets/clipboard/icon-preview.svg";

const WorkflowComponent: React.FC = () => {
  return (
    <Fragment>
      {/* Workflow section */}
      <section id="Workflow">
        <div className="section-container my-20">
          <h3>
            Supercharge your workflow
          </h3>
          <p className="paragraph-section text-xl leading-9 mb-25">
            We've got the tools to boost your productivity.
          </p>
          <div className="flex flex-col md:flex-row space-between">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={imgBlacklist} alt="Blacklist" className="mb-6"/>
              <h5 className="mb-3">Create Blacklists</h5>
              <p className="max-w-md text-grayish-blue">Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={imgText} alt="Text Snippets" className="mb-6"/>
              <h5 className="mb-3">Plain Text Snippets</h5>
              <p className="max-w-md text-grayish-blue">Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img src={imgPreview} alt="Sneak Preview" className="mb-6"/>
              <h5 className="mb-3">Sneak Preview</h5>
              <p className="max-w-md text-grayish-blue">Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

WorkflowComponent.displayName = "Workflow";

export const Workflow = memo(WorkflowComponent);
