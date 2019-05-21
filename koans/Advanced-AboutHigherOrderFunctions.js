describe("Array Method에 관하여", function () {

  it("'filter' method에 관해 학습합니다.", function () {
    let numbers = [1,2,3];

    let odd = numbers.filter(function (x) {
      return x % 2 !== 0;
    });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("'map' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];

    let numbersPlus1 = numbers.map(function(x) {
      return x + 1;
    });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("'reduce' method에 관해 학습합니다.", function () {
    let numbers = [1, 2, 3];
    let reduction = numbers.reduce(function(memo, x) {
      return memo + x;
    }, 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("'forEach' method에 관해 학습합니다.", function () {
    let numbers = [1,2,3];
    let msg = "";

    let isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("'every' method에 관해 학습합니다.", function () {
    let onlyEven = [2,4,6];
    let mixedBag = [2,4,5,6];

    let isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.every(isEven)).toBe(FILL_ME_IN);
  });

  it("'some' method에 관해 학습합니다." , function () {
    let onlyEven = [2,4,6];
    let mixedBag = [2,4,5,6];

    let isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.some(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.some(isEven)).toBe(FILL_ME_IN);
  });

  it("2개의 method를 연속적으로 사용하는 방법에 관해 학습합니다.", function() {
    let result = [0, 1, 2].map(function(x) { return x+1 } )
    .reduce(function (sum, x) { return sum + x });

    expect(result).toEqual(FILL_ME_IN);
  });

});

