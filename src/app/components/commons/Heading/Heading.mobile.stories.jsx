import React from 'react';

import Heading from './Heading.mobile';

export default {
  title: 'Heading',
  component: Heading
};

export const Basic = () => {
  return (
    <>
      <div className="storyBlock">
        <Heading level={1}>Heading 1</Heading>
      </div>
      <div className="storyBlock">
        <Heading level={2}>Heading 2</Heading>
      </div>
      <div className="storyBlock">
        <Heading level={3}>Heading 3</Heading>
      </div>
      <div className="storyBlock">
        <Heading level={4}>Heading 4</Heading>
      </div>
      <div className="storyBlock">
        <Heading level={5}>Heading 5</Heading>
      </div>
      <div className="storyBlock">
        <Heading level={6}>Heading 6</Heading>
      </div>
    </>
  );
};

export const SectionTitle = () => (
  <div className="storyBlock">
    <Heading sectionTitle>Section title</Heading>
  </div>
);
