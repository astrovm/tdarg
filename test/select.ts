import { act, fireEvent, screen } from "@testing-library/react";

// Opens a Radix Select by its accessible name and picks an option with the
// keyboard, the same way a keyboard user would.
export async function chooseOption(select: string, option: string | RegExp) {
  fireEvent.keyDown(screen.getByRole("combobox", { name: select }), { key: "Enter" });
  await act(() => Promise.resolve());
  fireEvent.keyDown(screen.getByRole("option", { name: option }), { key: "Enter" });
  await act(() => Promise.resolve());
}
