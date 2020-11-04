import React from 'react';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading
};

export const Basic = () => {
  return (
    <>
      <div className="storyBlock">
        <Heading headingLevel="h1">Heading 1</Heading>
      </div>
      <div className="storyBlock">
        <Heading headingLevel="h2">Heading 2</Heading>
      </div>
      <div className="storyBlock">
        <Heading headingLevel="h3">Heading 3</Heading>
      </div>
      <div className="storyBlock">
        <Heading headingLevel="h4">Heading 4</Heading>
      </div>
      <div className="storyBlock">
        <Heading headingLevel="h5">Heading 5</Heading>
      </div>
      <div className="storyBlock">
        <Heading headingLevel="h6">Heading 6</Heading>
      </div>
    </>
  );
};

export const SectionTitle = () => (
  <div className="storyBlock">
    <Heading sectionTitle>Section title</Heading>
  </div>
);
