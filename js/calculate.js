let cal = (원금, 이율, 매달저금액, 투자기간) => {
  for (let index = 0; index < 투자기간; index++) {
    원금 += 매달저금액 * 12;
    원금 += ~~(원금 * ~~(이율 / 100));
  }
  return 원금;
};

console.log(cal(600, 5, 100, 2));
