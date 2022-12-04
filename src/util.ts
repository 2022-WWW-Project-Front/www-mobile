let vw = window.innerWidth;
let vh = window.innerHeight;

let pad = 6;
let minWidth = 100;
let maxWidth = 160;
let positionHeight = 70;

let artworksList: artworkAttribute[] = [];

interface artworkAttribute {
  url: string;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const intersects = (a: artworkAttribute, b: artworkAttribute) => {
  if (!b.left || !b.right || !a.left || !a.right || !b.top || !a.bottom || !b.bottom || !a.top) return;
  return !(
    b.left > a.right + pad ||
    b.right < a.left - pad ||
    b.top > a.bottom + pad ||
    b.bottom < a.top - pad
  );
};

export const position = (artwork: artworkAttribute) => {
  artwork.width = 150;
  artwork.height = positionHeight;
  artwork.left = randomInt(pad, vw - (artwork.width + pad));
  artwork.top = randomInt(pad, vh * 0.8 - (artwork.height + pad));
  artwork.right = artwork.left + artwork.width;
  artwork.bottom = artwork.top + artwork.height;

  if (artworksList.length < 1) {
    artworksList.push(artwork);
    return;
  }

  artworksList.forEach((i) => {
    if (artwork === i) return;
    if (intersects(artwork, i)) {
      artworksList.push(artwork);
    }
  });
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
