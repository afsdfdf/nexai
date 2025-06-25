const fs = require('fs');
const https = require('https');
const path = require('path');

// URL for the Render Network logo
// Using a different source
const logoUrl = 'https://assets.coingecko.com/coins/images/11636/large/rndr.png';
const outputPath = path.join(__dirname, '../public/images/partners/render.png');

console.log('Downloading Render Network logo...');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

https.get(logoUrl, options, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download logo: HTTP status code ${response.statusCode}`);
    return;
  }

  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Logo downloaded successfully to ${outputPath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading logo: ${err.message}`);
}); 