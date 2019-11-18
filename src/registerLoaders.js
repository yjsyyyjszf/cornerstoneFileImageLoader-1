import { loadImage } from './loadImage.js';

export default function (cornerstone) {
  // Register the file prefixes so we can use HTML5 File API to work with local files
  cornerstone.registerImageLoader('imagefile', loadImage);
}