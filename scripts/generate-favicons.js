const fs = require('fs');
const path = require('path');

// Create favicon files by copying the NexAI logo
const sourceLogo = path.join(__dirname, '../public/images/nexai-logo.png');

// Create favicon.ico (copy the logo as favicon.ico)
const faviconIco = path.join(__dirname, '../public/favicon.ico');
const favicon16 = path.join(__dirname, '../public/favicon-16x16.png');
const favicon32 = path.join(__dirname, '../public/favicon-32x32.png');
const appleTouchIcon = path.join(__dirname, '../public/apple-touch-icon.png');

console.log('Generating favicon files...');

// Copy the logo to create favicon files
try {
  // For now, we'll copy the logo as the favicon files
  // In a real implementation, you'd want to resize the images properly
  fs.copyFileSync(sourceLogo, faviconIco);
  fs.copyFileSync(sourceLogo, favicon16);
  fs.copyFileSync(sourceLogo, favicon32);
  fs.copyFileSync(sourceLogo, appleTouchIcon);
  
  console.log('Favicon files generated successfully!');
} catch (error) {
  console.error('Error generating favicon files:', error);
}

// Create site.webmanifest file
const manifest = {
  name: "NexAI Phone",
  short_name: "NexAI",
  description: "The Future of Blockchain Smartphones",
  icons: [
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    },
    {
      src: "/favicon-32x32.png", 
      sizes: "32x32",
      type: "image/png"
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }
  ],
  theme_color: "#000000",
  background_color: "#000000",
  display: "standalone",
  start_url: "/"
};

const manifestPath = path.join(__dirname, '../public/site.webmanifest');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('Site manifest created successfully!'); 