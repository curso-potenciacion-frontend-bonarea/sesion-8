import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("Given an InputField component", () => {
  const labelText = "Cognom";

  describe("When it receives a label text 'Cognom'", () => {
    test("Then it should show a text field labelled by 'Cognom'", () => {
      render(<InputField id="lastName" labelText={labelText} />);

      const input = screen.getByLabelText(labelText);

      expect(input).toBeInTheDocument();
    });
  });

  describe("When the user types 'hola bon dia'", () => {
    test("Then it should show 'hola bon dia' inside the text field", async () => {
      const text = "Hola bon dia";

      render(<InputField id="test" labelText={labelText} />);

      const input = screen.getByLabelText(labelText);

      await userEvent.type(input, text);

      const filledInput = screen.getByDisplayValue(text);

      expect(filledInput).toBeInTheDocument();
    });
  });
});
