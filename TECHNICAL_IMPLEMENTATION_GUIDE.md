# NexAI Phone 技术实现指南

## 1. 智能合约架构

### 1.1 NEX 代币合约 (ERC-20)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract NexToken is ERC20, Ownable, Pausable {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 * 10**18;
    
    // 挖矿奖励合约地址
    address public miningRewardContract;
    
    // 质押合约地址
    address public stakingContract;
    
    constructor() ERC20("NexAI Token", "NEX") {
        _mint(msg.sender, TOTAL_SUPPLY);
    }
    
    // 设置挖矿奖励合约
    function setMiningRewardContract(address _contract) external onlyOwner {
        miningRewardContract = _contract;
    }
    
    // 设置质押合约
    function setStakingContract(address _contract) external onlyOwner {
        stakingContract = _contract;
    }
    
    // 挖矿奖励发放
    function mintReward(address to, uint256 amount) external {
        require(msg.sender == miningRewardContract, "Only mining contract");
        _mint(to, amount);
    }
    
    // 暂停/恢复转账
    function pause() external onlyOwner {
        _pause();
    }
    
    function unpause() external onlyOwner {
        _unpause();
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
```

### 1.2 手机 NFT 合约 (ERC-721)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PhoneNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;
    
    // NFT 属性结构
    struct PhoneAttributes {
        uint8 rarity;        // 0-4: Common, Rare, Epic, Legendary, Mythic
        uint8 miningBonus;   // 挖矿效率加成 (5-50)
        uint8 networkSpeed;  // 网络速度倍数 (11-20, 表示 1.1x-2.0x)
        uint8 batteryLife;   // 电池寿命加成 (10-100)
        uint8 specialSkill;  // 特殊技能 ID
        uint256 mintTime;    // 铸造时间
    }
    
    // 代币 ID 到属性的映射
    mapping(uint256 => PhoneAttributes) public phoneAttributes;
    
    // 稀有度概率分布
    uint8[] public rarityProbabilities = [50, 30, 15, 4, 1]; // 百分比
    
    constructor() ERC721("NexAI Phone NFT", "NEXPHONE") {}
    
    // 铸造新手机 NFT
    function mintPhone(address to, string memory tokenURI) 
        external 
        onlyOwner 
        returns (uint256) 
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        
        // 生成随机属性
        PhoneAttributes memory attrs = generateRandomAttributes();
        phoneAttributes[newTokenId] = attrs;
        
        return newTokenId;
    }
    
    // 生成随机属性
    function generateRandomAttributes() internal view returns (PhoneAttributes memory) {
        uint8 rarity = determineRarity();
        
        return PhoneAttributes({
            rarity: rarity,
            miningBonus: getMiningBonus(rarity),
            networkSpeed: getNetworkSpeed(rarity),
            batteryLife: getBatteryLife(rarity),
            specialSkill: getSpecialSkill(rarity),
            mintTime: block.timestamp
        });
    }
    
    // 确定稀有度
    function determineRarity() internal view returns (uint8) {
        uint256 rand = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 100;
        uint256 cumulative = 0;
        
        for (uint8 i = 0; i < rarityProbabilities.length; i++) {
            cumulative += rarityProbabilities[i];
            if (rand < cumulative) {
                return i;
            }
        }
        return 0;
    }
    
    // 根据稀有度获取挖矿加成
    function getMiningBonus(uint8 rarity) internal pure returns (uint8) {
        if (rarity == 0) return 5;   // Common
        if (rarity == 1) return 15;  // Rare
        if (rarity == 2) return 25;  // Epic
        if (rarity == 3) return 35;  // Legendary
        return 50;                   // Mythic
    }
    
    // 根据稀有度获取网络速度
    function getNetworkSpeed(uint8 rarity) internal pure returns (uint8) {
        if (rarity == 0) return 11;  // 1.1x
        if (rarity == 1) return 13;  // 1.3x
        if (rarity == 2) return 15;  // 1.5x
        if (rarity == 3) return 18;  // 1.8x
        return 20;                   // 2.0x
    }
    
    // 根据稀有度获取电池寿命
    function getBatteryLife(uint8 rarity) internal pure returns (uint8) {
        if (rarity == 0) return 10;
        if (rarity == 1) return 25;
        if (rarity == 2) return 50;
        if (rarity == 3) return 75;
        return 100;
    }
    
    // 根据稀有度获取特殊技能
    function getSpecialSkill(uint8 rarity) internal pure returns (uint8) {
        if (rarity < 2) return 0; // 无特殊技能
        return rarity; // 技能 ID 等于稀有度
    }
    
    // 获取手机属性
    function getPhoneAttributes(uint256 tokenId) 
        external 
        view 
        returns (PhoneAttributes memory) 
    {
        require(_exists(tokenId), "Token does not exist");
        return phoneAttributes[tokenId];
    }
    
    // 重写必要的函数
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
```

### 1.3 挖矿奖励合约
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./NexToken.sol";
import "./PhoneNFT.sol";

contract MiningReward is Ownable, ReentrancyGuard {
    NexToken public nexToken;
    PhoneNFT public phoneNFT;
    
    // 挖矿记录结构
    struct MiningSession {
        uint256 startTime;
        uint256 endTime;
        uint256 reward;
        uint8 networkId; // 0: Helium, 1: Filecoin, 2: Render, etc.
        bool isActive;
    }
    
    // 用户挖矿记录
    mapping(address => MiningSession[]) public userMiningSessions;
    
    // 网络奖励率 (每小时的 NEX 奖励)
    mapping(uint8 => uint256) public networkRewardRates;
    
    // 用户当前活跃挖矿会话
    mapping(address => uint256) public activeSessionIndex;
    
    // 事件
    event MiningStarted(address indexed user, uint8 networkId, uint256 sessionId);
    event MiningStopped(address indexed user, uint256 reward, uint256 sessionId);
    event RewardClaimed(address indexed user, uint256 amount);
    
    constructor(address _nexToken, address _phoneNFT) {
        nexToken = NexToken(_nexToken);
        phoneNFT = PhoneNFT(_phoneNFT);
        
        // 设置各网络的基础奖励率
        networkRewardRates[0] = 10 * 10**18; // Helium: 10 NEX/hour
        networkRewardRates[1] = 15 * 10**18; // Filecoin: 15 NEX/hour
        networkRewardRates[2] = 20 * 10**18; // Render: 20 NEX/hour
        networkRewardRates[3] = 12 * 10**18; // Livepeer: 12 NEX/hour
    }
    
    // 开始挖矿
    function startMining(uint8 networkId, uint256 phoneTokenId) 
        external 
        nonReentrant 
    {
        require(networkId < 8, "Invalid network ID");
        require(phoneNFT.ownerOf(phoneTokenId) == msg.sender, "Not phone owner");
        require(activeSessionIndex[msg.sender] == 0, "Already mining");
        
        // 创建新的挖矿会话
        MiningSession memory newSession = MiningSession({
            startTime: block.timestamp,
            endTime: 0,
            reward: 0,
            networkId: networkId,
            isActive: true
        });
        
        userMiningSessions[msg.sender].push(newSession);
        activeSessionIndex[msg.sender] = userMiningSessions[msg.sender].length;
        
        emit MiningStarted(msg.sender, networkId, userMiningSessions[msg.sender].length - 1);
    }
    
    // 停止挖矿
    function stopMining() external nonReentrant {
        uint256 sessionIdx = activeSessionIndex[msg.sender];
        require(sessionIdx > 0, "No active mining session");
        
        sessionIdx--; // 转换为数组索引
        MiningSession storage session = userMiningSessions[msg.sender][sessionIdx];
        require(session.isActive, "Session not active");
        
        // 计算挖矿时间
        uint256 miningDuration = block.timestamp - session.startTime;
        uint256 hoursMined = miningDuration / 3600;
        
        // 计算基础奖励
        uint256 baseReward = networkRewardRates[session.networkId] * hoursMined;
        
        // 应用手机 NFT 加成
        uint256 bonus = calculatePhoneBonus(msg.sender, sessionIdx);
        uint256 totalReward = baseReward + (baseReward * bonus / 100);
        
        // 更新会话
        session.endTime = block.timestamp;
        session.reward = totalReward;
        session.isActive = false;
        
        // 重置活跃会话索引
        activeSessionIndex[msg.sender] = 0;
        
        // 发放奖励
        nexToken.mintReward(msg.sender, totalReward);
        
        emit MiningStopped(msg.sender, totalReward, sessionIdx);
    }
    
    // 计算手机 NFT 加成
    function calculatePhoneBonus(address user, uint256 sessionIdx) 
        internal 
        view 
        returns (uint256) 
    {
        // 这里需要根据用户拥有的手机 NFT 计算加成
        // 简化实现，实际需要查询用户的 NFT 属性
        return 0; // 默认无加成
    }
    
    // 获取用户挖矿历史
    function getUserMiningHistory(address user) 
        external 
        view 
        returns (MiningSession[] memory) 
    {
        return userMiningSessions[user];
    }
    
    // 获取用户总挖矿奖励
    function getUserTotalRewards(address user) 
        external 
        view 
        returns (uint256 total) 
    {
        for (uint256 i = 0; i < userMiningSessions[user].length; i++) {
            total += userMiningSessions[user][i].reward;
        }
        return total;
    }
    
    // 设置网络奖励率
    function setNetworkRewardRate(uint8 networkId, uint256 rate) external onlyOwner {
        networkRewardRates[networkId] = rate;
    }
}
```

## 2. 前端集成

### 2.1 Web3 连接配置
```typescript
// lib/web3.ts
import { ethers } from 'ethers';
import { create } from 'zustand';

interface Web3Store {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const useWeb3Store = create<Web3Store>((set, get) => ({
  provider: null,
  signer: null,
  address: null,
  isConnected: false,
  
  connect: async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        
        set({
          provider,
          signer,
          address,
          isConnected: true,
        });
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    }
  },
  
  disconnect: () => {
    set({
      provider: null,
      signer: null,
      address: null,
      isConnected: false,
    });
  },
}));
```

### 2.2 合约交互 Hook
```typescript
// hooks/useContracts.ts
import { useWeb3Store } from '@/lib/web3';
import { useMemo } from 'react';
import { ethers } from 'ethers';

// 合约 ABI 和地址
const NEX_TOKEN_ADDRESS = '0x...';
const PHONE_NFT_ADDRESS = '0x...';
const MINING_REWARD_ADDRESS = '0x...';

export const useContracts = () => {
  const { signer, isConnected } = useWeb3Store();
  
  const contracts = useMemo(() => {
    if (!signer || !isConnected) return null;
    
    return {
      nexToken: new ethers.Contract(NEX_TOKEN_ADDRESS, NEX_TOKEN_ABI, signer),
      phoneNFT: new ethers.Contract(PHONE_NFT_ADDRESS, PHONE_NFT_ABI, signer),
      miningReward: new ethers.Contract(MINING_REWARD_ADDRESS, MINING_REWARD_ABI, signer),
    };
  }, [signer, isConnected]);
  
  return contracts;
};
```

### 2.3 挖矿控制组件
```typescript
// components/MiningControl.tsx
import { useState, useEffect } from 'react';
import { useContracts } from '@/hooks/useContracts';
import { useWeb3Store } from '@/lib/web3';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MiningControl = () => {
  const contracts = useContracts();
  const { address } = useWeb3Store();
  const [isMining, setIsMining] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(0);
  const [userPhones, setUserPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  
  const networks = [
    { id: 0, name: 'Helium', icon: '📡' },
    { id: 1, name: 'Filecoin', icon: '💾' },
    { id: 2, name: 'Render', icon: '🎨' },
    { id: 3, name: 'Livepeer', icon: '🎥' },
  ];
  
  useEffect(() => {
    if (contracts && address) {
      loadUserPhones();
      checkMiningStatus();
    }
  }, [contracts, address]);
  
  const loadUserPhones = async () => {
    try {
      // 获取用户拥有的手机 NFT
      const balance = await contracts.phoneNFT.balanceOf(address);
      const phones = [];
      
      for (let i = 0; i < balance; i++) {
        const tokenId = await contracts.phoneNFT.tokenOfOwnerByIndex(address, i);
        const attributes = await contracts.phoneNFT.getPhoneAttributes(tokenId);
        phones.push({ tokenId, attributes });
      }
      
      setUserPhones(phones);
      if (phones.length > 0) {
        setSelectedPhone(phones[0].tokenId);
      }
    } catch (error) {
      console.error('Failed to load phones:', error);
    }
  };
  
  const checkMiningStatus = async () => {
    try {
      const activeSession = await contracts.miningReward.activeSessionIndex(address);
      setIsMining(activeSession > 0);
    } catch (error) {
      console.error('Failed to check mining status:', error);
    }
  };
  
  const startMining = async () => {
    if (!contracts || !selectedPhone) return;
    
    try {
      const tx = await contracts.miningReward.startMining(selectedNetwork, selectedPhone);
      await tx.wait();
      setIsMining(true);
    } catch (error) {
      console.error('Failed to start mining:', error);
    }
  };
  
  const stopMining = async () => {
    if (!contracts) return;
    
    try {
      const tx = await contracts.miningReward.stopMining();
      await tx.wait();
      setIsMining(false);
    } catch (error) {
      console.error('Failed to stop mining:', error);
    }
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🛠️</span>
          Mining Control
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 网络选择 */}
        <div>
          <label className="block text-sm font-medium mb-2">Select Network</label>
          <div className="grid grid-cols-2 gap-2">
            {networks.map((network) => (
              <Button
                key={network.id}
                variant={selectedNetwork === network.id ? "default" : "outline"}
                onClick={() => setSelectedNetwork(network.id)}
                className="justify-start"
              >
                <span className="mr-2">{network.icon}</span>
                {network.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* 手机选择 */}
        {userPhones.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-2">Select Phone</label>
            <select
              value={selectedPhone || ''}
              onChange={(e) => setSelectedPhone(Number(e.target.value))}
              className="w-full p-2 border rounded-md bg-slate-800 border-slate-600"
            >
              {userPhones.map((phone) => (
                <option key={phone.tokenId} value={phone.tokenId}>
                  Phone #{phone.tokenId} (Bonus: +{phone.attributes.miningBonus}%)
                </option>
              ))}
            </select>
          </div>
        )}
        
        {/* 挖矿控制 */}
        <div className="flex gap-2">
          {!isMining ? (
            <Button
              onClick={startMining}
              disabled={!selectedPhone}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600"
            >
              Start Mining
            </Button>
          ) : (
            <Button
              onClick={stopMining}
              className="flex-1 bg-gradient-to-r from-red-600 to-pink-600"
            >
              Stop Mining
            </Button>
          )}
        </div>
        
        {/* 状态显示 */}
        <div className="text-center">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
            isMining 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              isMining ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
            }`}></div>
            {isMining ? 'Mining Active' : 'Not Mining'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
```

## 3. DePIN 网络集成

### 3.1 Helium 网络集成
```typescript
// lib/helium.ts
export class HeliumIntegration {
  private apiUrl = 'https://api.helium.io/v1';
  
  async getHotspotInfo(address: string) {
    const response = await fetch(`${this.apiUrl}/hotspots/${address}`);
    return response.json();
  }
  
  async getHotspotRewards(address: string, startTime: string, endTime: string) {
    const response = await fetch(
      `${this.apiUrl}/hotspots/${address}/rewards?min_time=${startTime}&max_time=${endTime}`
    );
    return response.json();
  }
  
  async submitProofOfCoverage(address: string, challenge: any) {
    // 实现 PoC 挑战响应
    const response = await fetch(`${this.apiUrl}/challenges/${challenge.id}/receipts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        address,
        receipt: challenge.receipt,
        timestamp: challenge.timestamp,
      }),
    });
    return response.json();
  }
}
```

### 3.2 Filecoin 网络集成
```typescript
// lib/filecoin.ts
export class FilecoinIntegration {
  private apiUrl = 'https://api.filecoin.io';
  
  async getStorageDeals(address: string) {
    const response = await fetch(`${this.apiUrl}/storage/deals?provider=${address}`);
    return response.json();
  }
  
  async submitStorageProof(sectorId: string, proof: any) {
    const response = await fetch(`${this.apiUrl}/storage/proofs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sector_id: sectorId,
        proof: proof,
      }),
    });
    return response.json();
  }
  
  async getStoragePower(address: string) {
    const response = await fetch(`${this.apiUrl}/storage/power/${address}`);
    return response.json();
  }
}
```

## 4. 数据聚合和分析

### 4.1 收益计算服务
```typescript
// services/rewardCalculator.ts
export class RewardCalculator {
  private networks = {
    helium: { baseRate: 10, multiplier: 1.0 },
    filecoin: { baseRate: 15, multiplier: 1.2 },
    render: { baseRate: 20, multiplier: 1.5 },
    livepeer: { baseRate: 12, multiplier: 1.1 },
  };
  
  calculateReward(
    network: string,
    duration: number,
    phoneBonus: number,
    networkLoad: number
  ): number {
    const networkConfig = this.networks[network];
    if (!networkConfig) return 0;
    
    const baseReward = networkConfig.baseRate * (duration / 3600); // 转换为小时
    const loadMultiplier = 1 + (networkLoad * 0.1); // 网络负载加成
    const totalMultiplier = networkConfig.multiplier * loadMultiplier * (1 + phoneBonus / 100);
    
    return baseReward * totalMultiplier;
  }
  
  async getOptimalNetwork(): Promise<string> {
    // 分析各网络当前收益率，返回最优选择
    const networkStats = await this.getNetworkStats();
    
    return Object.entries(networkStats)
      .sort(([,a], [,b]) => b.rewardRate - a.rewardRate)[0][0];
  }
  
  private async getNetworkStats() {
    // 获取各网络实时统计信息
    return {
      helium: { rewardRate: 12.5, load: 0.7 },
      filecoin: { rewardRate: 18.2, load: 0.8 },
      render: { rewardRate: 25.1, load: 0.6 },
      livepeer: { rewardRate: 14.3, load: 0.5 },
    };
  }
}
```

## 5. 部署配置

### 5.1 Docker 配置
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm ci --only=production

# 复制应用代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
```

### 5.2 环境变量配置
```env
# .env.production
NEXT_PUBLIC_NEX_TOKEN_ADDRESS=0x...
NEXT_PUBLIC_PHONE_NFT_ADDRESS=0x...
NEXT_PUBLIC_MINING_REWARD_ADDRESS=0x...

HELIUM_API_KEY=your_helium_api_key
FILECOIN_API_KEY=your_filecoin_api_key
RENDER_API_KEY=your_render_api_key

DATABASE_URL=your_database_url
REDIS_URL=your_redis_url

WEB3_PROVIDER_URL=your_web3_provider_url
```

---

*本技术实现指南提供了基础框架，实际开发中需要根据具体需求进行调整和优化* 