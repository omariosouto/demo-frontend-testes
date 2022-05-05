import { render } from '../utils/test/react-testing-library';
import { Text } from './Text';


describe('<Text />', () => {
    it('should render a <span> tag', () => {
        const { container } = render(<Text>Hello World</Text>);
        expect(container.firstChild.tagName).toBe('SPAN');
        expect(container).toMatchSnapshot();
    });
})