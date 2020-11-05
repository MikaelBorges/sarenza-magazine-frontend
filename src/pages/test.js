import React from 'react';
import Markdown from "markdown-to-jsx"

function test(props) {
    const md = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet pulvinar\n neque, at lobortis enim placerat vitae. Phasellus ut nibh tristique mi efficitur ultricies id ac orci. Morbi vehicula nunc eget est tristique, non fermentum neque commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed consequat sit amet arcu vitae vulputate. Mauris ac purus at ante varius porttitor. Vestibulum efficitur sit amet massa et iaculis."
    return (
        <div>
            <Markdown>
                {md}
            </Markdown>
        </div>
    );
}

export default test;