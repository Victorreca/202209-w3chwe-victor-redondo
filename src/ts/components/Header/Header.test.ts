import Header from "./Header";

describe("Given an instance of the Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the title 'Pokémon' on the screen", () => {
      const root = document.createElement("body");
      const mainHeader = new Header(root);
      mainHeader.render();

      const mainTitle = root.querySelector("h1");
      const expectedTitle = "Pokémon";

      expect(mainTitle).not.toBeNull();
      expect(mainTitle.textContent).toBe(expectedTitle);
    });
  });
});
