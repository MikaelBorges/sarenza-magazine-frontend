import * as React from 'react';

function Spinner(props) {
  return (
    <svg width={448} height={448} viewBox="0 0 448 448" {...props}>
      <path d="M440 224c0 119.25-96.75 216-216 216S8 343.25 8 224C8 115.5 88 25.75 192 10.25v57C119 82 64 146.75 64 224c0 88.25 71.75 160 160 160s160-71.75 160-160c0-77.25-55-142-128-156.75v-57C360 25.75 440 115.5 440 224z" />
    </svg>
  );
}

export default Spinner;
