import * as React from "react";
import renderer from "react-test-renderer";
import { H1, H2, H3, H4, H5, H6, H7, H8, P } from '@components/Typography';

it(`renders correctly`, () => {
  const tree = renderer.create(<H1>Snapshot test!</H1>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('should have prop', () => {
  const tree = renderer.create(<H1>Iancu</H1>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(40)
});


it('should have prop h2', () => {
  const tree = renderer.create(<H2>Iancu</H2>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(32)
});


it('should have prop h3', () => {
  const tree = renderer.create(<H3>Iancu</H3>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(26)
});


it('should have prop h4', () => {
  const tree = renderer.create(<H4>Iancu</H4>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(22)
});


it('should have prop h5', () => {
  const tree = renderer.create(<H5>Iancu</H5>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(20)
});


it('should have prop h6', () => {
  const tree = renderer.create(<H6>Iancu</H6>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(18)
});


it('should have prop h7', () => {
  const tree = renderer.create(<H7>Iancu</H7>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(16)
});


it('should have prop h8', () => {
  const tree = renderer.create(<H8>Iancu</H8>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][1].fontSize).toEqual(14)
});

it('should have prop p', () => {
  const tree = renderer.create(<P>Iancu</P>).toJSON()as any;
  expect(tree).toMatchSnapshot();

  expect(...tree.children).toEqual('Iancu')
  expect(tree.props.style[1][0].fontSize).toEqual(16)
});