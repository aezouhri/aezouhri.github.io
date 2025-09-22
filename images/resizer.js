// Script to resize an image to multiple sizes and apply a circular mask to each.
const path = require('path');
const sharp = require('sharp');

const src = path.resolve('AE Logo.png');
// To create other sizes, repeat the above with different dimensions and output filenames.

const sizes = [512];
sizes.forEach(size => {
  const outputDst = path.resolve(`logo512.png`);
  const circleMaskSize = Buffer.from(`
    <svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>
  `);

  sharp(src)
    .resize(size, size, {
      kernel: sharp.kernel.lanczos3,
      fit: 'cover',
      withoutEnlargement: true
    })
    .composite([
      {
        input: circleMaskSize,
        blend: 'dest-in' // keeps only the circle area
      }
    ])
    .png() // ensures transparent corners
    .toFile(outputDst)
    .then(() => console.log('Saved circular image:', outputDst))
    .catch(console.error);
});// This script resizes an image to multiple sizes and applies a circular mask to each.