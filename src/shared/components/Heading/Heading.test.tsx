import { render, screen } from "@testing-library/react";
import Heading from ".";

describe("Given a Heading component", () => {
  describe("When it receives 'Mario App'", () => {
    test("Then it should show 'Mario App' inside a heading", () => {
      // Arrange
      const expectedText = "Mario App";

      // Act
      render(<Heading level={3}>{expectedText}</Heading>);

      const heading = screen.getByRole("heading", {
        name: expectedText,
      });

      // Assert
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives a level 3", () => {
    test("Then it should show a level 3 heading", () => {
      const level = 3;

      render(<Heading level={level} />);

      const heading = screen.getByRole("heading", {
        level,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
