let vw = window.innerWidth;
let vh = window.innerHeight;

let pad = 6;
let minWidth = 4.375;
let maxWidth = 8.75;
let positionHeight = 4.375;

let artworksList = [];

interface artworkAttribute {
  url: string;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  background?: string;
}

// for (let i = 0; i < 30; i++) {
//   artworksList[i] = {
//     width: minWidth,
//     height: positionHeight,
//     left: 0,
//     top: 0,
//     right: minWidth,
//     bottom: positionHeight,
//     background: 'var(--main1)'
//   };
// }

export const position = (artwork: artworkAttribute) => {
  artwork.width = randomInt(minWidth, maxWidth);
  artwork.height = positionHeight;
  artwork.left = randomInt(pad, vw - (artwork.width + pad));
  artwork.top = randomInt(pad, vh - (artwork.height + pad));
  artwork.right = artwork.left + artwork.width;
  artwork.bottom = artwork.top + artwork.height;
  console.log(artwork);
  artworksList.push(artwork);
};

const randomInt = (min: number, max: number) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    let tmp = min;
    min = max;
    max = tmp;
  }
  return Math.floor(min + (max - min + 1) * Math.random());
};
