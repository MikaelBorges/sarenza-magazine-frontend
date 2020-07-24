import React from "react";

import styled from "styled-components";
import { Button } from "../Button/Button";

export const EditoCitation = ({content, author, button}) => {
    let auth = {author} != "" ? ` - ${author}` : ``;
    return (
        <div>
            <p>&laquo; {content} &raquo; {auth}</p>
            <Button btn={{ action: button.action, value: button.value }} />
        </div>
    );
};