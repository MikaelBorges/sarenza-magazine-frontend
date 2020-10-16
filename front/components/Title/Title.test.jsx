import { mount } from 'enzyme';

import Title from './title';

describe('Title Component', () => {
    it('should render without crashing', () => {
        const wrapper = mount(<Title value="test" />);

        expect(wrapper.find('h1')).toHaveLength(1);
    });
});
