//@import resources
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
    isHolders: false,
  },
  {
    image: price,
    title: "WPT Price",
    isBalance: false,
    isHolders: false,
  },
  {
    image: market,
    title: "Market Cap",
    isBalance: false,
    isHolders: false,
  },
  {
    image: holders,
    title: "Holders",
    isBalance: false,
    isHolders: true,
  },
  {
    image: volume,
    title: "Daily Volume",
    isBalance: false,
    isHolders: false,
  },
];
