import '../../App.css';

import React from 'react';

import * as ICONS from '../Icon/constants';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

export const Basic = () => <Button onClick={() => {}}>Button</Button>;
export const WithIcon = () => (
  <>
    <div className="storyBox">
      <Button onClick={() => {}} iconName={ICONS.CHEVRON_RIGHT}>
        Button
      </Button>
    </div>
    <div className="storyBox">
      <Button onClick={() => {}} iconName={ICONS.CHEVRON_RIGHT} iconAfter>
        Button
      </Button>
    </div>
    <div className="storyBox">
      <Button onClick={() => {}} iconName={ICONS.CHEVRON_DOWN} iconAfter>
        Button
      </Button>
    </div>
  </>
);
export const WithLoader = () => (
  <>
    <div className="storyBox">
      <Button onClick={() => {}} isLoading>
        Button
      </Button>
    </div>
    <div className="storyBox">
      <Button onClick={() => {}} isLoaded>
        Button
      </Button>
    </div>
  </>
);
