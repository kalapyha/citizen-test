import React from "react";
import renderer from "react-test-renderer";
import Quiz1Screen from "../Quiz1Screen";

const test = [
  {
    question: "Question",
    choices: ["English"],
    correctChoice: "English",
  },
];
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

describe("<Quiz1Screen />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(<Quiz1Screen questions={test} quizId="quiz1" />)
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
