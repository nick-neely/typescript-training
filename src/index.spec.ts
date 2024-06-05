import { add, helloWorld } from "./index";

describe("Testing", () => {
  it("input contains Hello World, Hello World is returned", () => {
    const result = helloWorld();
    expect(result).toBe("Hello World");
  });

  it("1 + 2, 3 is returned", () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(3);
  });
});
