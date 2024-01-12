import React, { FC } from 'react';

type Props = {};

const Testing: FC<Props> = () => {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab ">
          Tab 2
        </a>
        <a role="tab" className="tab tab-active">
          Tab 3
        </a>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 1
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 2
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          Tab content 3
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </>
  );
};

export default Testing;
