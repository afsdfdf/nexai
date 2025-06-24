const fs = require('fs');
const path = require('path');
const https = require('https');

// 创建目录（如果不存在）
const partnersDir = path.join(__dirname, '../public/images/partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

// 合作伙伴徽标URL
const partnerLogos = [
  {
    name: 'ethereum.png',
    url: 'https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/13c43/eth-diamond-purple.png'
  },
  {
    name: 'chainlink.png',
    url: 'https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg'
  },
  {
    name: 'polkadot.png',
    url: 'https://polkadot.network/assets/img/logo-polkadot.svg'
  },
  {
    name: 'filecoin.png',
    url: 'https://filecoin.io/images/filecoin-logo.svg'
  },
  {
    name: 'helium.png',
    url: 'https://www.helium.com/static/images/helium-logo.svg'
  },
  {
    name: 'a16z.png',
    url: 'https://a16z.com/wp-content/uploads/2021/10/a16z-logo-crypto-white.png'
  },
  {
    name: 'paradigm.png',
    url: 'https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBITniTB/d5e788223d2567b451ee673e34e11b7a/paradigm-logo.svg'
  },
  {
    name: 'polychain.png',
    url: 'https://polychain.capital/static/img/polychain-capital.svg'
  },
  {
    name: 'coinbase-ventures.png',
    url: 'https://assets.website-files.com/6059b554e81c705f9dd2dd32/60ec6a994209908817e5fdf7_Coinbase%20Ventures%20Logo.svg'
  }
];

// 下载函数
function downloadImage(url, filename) {
  const filePath = path.join(partnersDir, filename);
  
  console.log(`Downloading ${filename} from ${url}...`);
  
  // 对于SVG文件，我们可以使用占位图片
  if (url.endsWith('.svg')) {
    console.log(`${filename} is an SVG file. Using placeholder instead.`);
    // 复制占位图片
    fs.copyFileSync(
      path.join(__dirname, '../public/placeholder-logo.png'),
      filePath
    );
    console.log(`Copied placeholder for ${filename}`);
    return;
  }
  
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
      });
    } else {
      fs.unlinkSync(filePath);
      console.error(`Failed to download ${filename}: Status code ${response.statusCode}`);
      // 使用占位图片
      fs.copyFileSync(
        path.join(__dirname, '../public/placeholder-logo.png'),
        filePath
      );
      console.log(`Used placeholder for ${filename}`);
    }
  }).on('error', (err) => {
    fs.unlinkSync(filePath);
    console.error(`Error downloading ${filename}: ${err.message}`);
    // 使用占位图片
    fs.copyFileSync(
      path.join(__dirname, '../public/placeholder-logo.png'),
      filePath
    );
    console.log(`Used placeholder for ${filename}`);
  });
}

// 下载所有徽标
partnerLogos.forEach(logo => {
  downloadImage(logo.url, logo.name);
});

console.log('Started downloading partner logos...'); 