import React from "react";
import renderer from "react-test-renderer";
import CustomButton from "../CustomButton";

describe("<CustomButton />", () => {
  it("has 2 childs", () => {
    const tree = renderer
      .create(<CustomButton title="tt" onPress={() => null} />)
      .toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<CustomButton title="test" onPress={() => null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
