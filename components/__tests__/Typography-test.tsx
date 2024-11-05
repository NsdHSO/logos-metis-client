import * as React from "react";
import renderer from "react-test-renderer";
import { H1 } from "@components/Typography";

it(`renders correctly`, () => {
  const tree = renderer.create(<H1>Snapshot test!</H1>).toJSON();

  expect(tree).toMatchSnapshot();
});
