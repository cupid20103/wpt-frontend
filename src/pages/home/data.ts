import balance from "assets/images/balance.svg";
import price from "assets/images/price.png";
import market from "assets/images/market.png";
import holders from "assets/images/holders.svg";
import volume from "assets/images/volume.svg";

export const contents = [
  {
    image: balance,
    title: "Account Balance",
    isBalance: true,
    content: "$123,456,78",
  },
  {
    image: price,
    title: "WPT Price",
    isBalance: false,
    content: "$123,456,78",
  },
  {
    image: market,
    title: "Market Cap",
    isBalance: false,
    content: "$123,456,78",
  },
  {
    image: holders,
    title: "Holders",
    isBalance: false,
    content: "123,456",
  },
  {
    image: volume,
    title: "Daily Volume",
    isBalance: false,
    content: "$123,456,78",
  },
];
