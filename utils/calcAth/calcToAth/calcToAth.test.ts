import { calcToAth } from "./calcToAth";

describe("calculatePercentageDrop", () => {
  let consoleError: typeof console.error;

  beforeAll(() => {
    consoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = consoleError;
  });

  it("should correctly calculate the percentage drop", () => {
    const ath = 50;
    const currentPrice = 10;
    const expectedToAth = 400;

    const toAth = calcToAth(ath, currentPrice);

    expect(toAth).toBe(expectedToAth);
  });
  it("should return 0 when current price is equal to ath", () => {
    const ath = 100;
    const currentPrice = 100;
    const expectedToAth = 0;

    const toAth = calcToAth(ath, currentPrice);

    expect(toAth).toBe(expectedToAth);
  });
  it("should return 0 when currentPrice is 0", () => {
    const ath = 50;
    const currentPrice = 0;
    const expectedToAth = 0;

    const toAth = calcToAth(ath, currentPrice);

    expect(toAth).toBe(expectedToAth);
  });
  it("should call console.error when currentPrice is 0", () => {
    const ath = 50;
    const currentPrice = 0;

    calcToAth(ath, currentPrice);

    expect(console.error).toHaveBeenCalled();
  });
  it("should handle cases where current price is more than ath", () => {
    const ath = 100;
    const currentPrice = 200;
    const expectedToAth = -50;

    const toAth = calcToAth(ath, currentPrice);

    expect(toAth).toBe(expectedToAth);
  });
  it("should call console.error when currentPrice more than ATH", () => {
    const ath = 100;
    const currentPrice = 200;

    calcToAth(ath, currentPrice);

    expect(console.error).toHaveBeenCalled();
  });
});
