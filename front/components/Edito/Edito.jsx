import React from 'react';

import { EditoTitle } from '../EditoTitle/EditoTitle';
import { EditoCitation } from '../EditoCitation/EditoCitation';
import { EditoDefault } from '../EditoDefault/EditoDefault';

const EditoContent = ({ contentType, ...rest }) => {
    switch (contentType) {
        case 'editoTitle':
            return <EditoTitle {...rest} />;
        case 'editoCitation':
            return <EditoCitation {...rest} />;
        default:
            return <EditoDefault {...rest} />;
    }
};

export default EditoContent;
