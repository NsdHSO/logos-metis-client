
import renderer from "react-test-renderer";
import { ThemedText } from '@components/ThemedText';

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ThemedText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should assert the number', () => {
    expect(3).not.toBe(0);
  });
});