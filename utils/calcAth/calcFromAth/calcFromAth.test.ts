import { calcFromAth } from "./calcFromAth";

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
    const ath = 100;
    const currentPrice = 30;
    const expectedFromAth = 70;

    const fromAth = calcFromAth(ath, currentPrice);

    expect(fromAth).toBe(expectedFromAth);
  });
  it("should return 0 when current price is equal to ath", () => {
    const ath = 100;
    const currentPrice = 100;
    const expectedFromAth = 0;

    const fromAth = calcFromAth(ath, currentPrice);

    expect(fromAth).toBe(expectedFromAth);
  });
  it("should return 0 when ath is 0", () => {
    const ath = 0;
    const currentPrice = 100;
    const expectedFromAth = 0;

    const fromAth = calcFromAth(ath, currentPrice);

    expect(fromAth).toBe(expectedFromAth);
  });
  it("should call console.error when ath is 0", () => {
    const ath = 0;
    const currentPrice = 100;

    calcFromAth(ath, currentPrice);

    expect(console.error).toHaveBeenCalled();
  });
  it("should handle cases where current price is more than ath", () => {
    const ath = 100;
    const currentPrice = 200;
    const expectedFromAth = -100;

    const fromAth = calcFromAth(ath, currentPrice);

    expect(fromAth).toBe(expectedFromAth);
  });
  it("should call console.error when currentPrice more than ATH", () => {
    const ath = 100;
    const currentPrice = 200;

    calcFromAth(ath, currentPrice);

    expect(console.error).toHaveBeenCalled();
  });
});
