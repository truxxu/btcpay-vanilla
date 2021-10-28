let sats = 100;
let rate = "...loading";

const satsField = document.getElementById("sats");
satsField.innerText = sats;

const fiatPrice = document.getElementById("fiatPrice");

const addSats = () => {
  satsField.innerText = sats += 100;
  fiatPrice.innerText = convertToFiat(rate, sats);
};

const convertToFiat = (rate, sats) => {
  const val = rate * 0.00000001 * sats;
  return val.toFixed();
};

const getRate = async () => {
  try {
    let response = await fetch("https://bitpay.com/rates/BTC/COP");
    let data = await response.json();
    return data.data.rate;
  } catch (error) {
    alert("Something happened, try again later");
  }
};

const renderRate = async () => {
  rate = await getRate();
  fiatPrice.innerText = convertToFiat(rate, sats);
};

renderRate();

const paySats = () => {
  console.log("pay request", sats);
};
