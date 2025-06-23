# �� NexAI Phone 图片制作指南（苹果风酷黑主题）

## 📋 核心配色规范

### 🎯 苹果风酷黑主题
根据网站当前CSS主题 (`app/globals.css`)，严格遵循以下配色：

#### 背景层次系统
- **纯黑基底：** `#000000` - 最深层背景
- **炭黑主调：** `#0f172a (rgb(15, 23, 42))` - 主要背景色
- **深灰层次：** `#1e293b (rgb(30, 41, 59))` - 卡片/容器背景
- **边框灰调：** `#0f172a (12% opacity)` - 细边框色彩

#### 主色调渐变系统
- **主蓝色：** `#3b82f6 (rgb(59, 130, 246))`
- **次紫色：** `#8b5cf6 (rgb(139, 92, 246))`
- **强调粉：** `#ec4899 (rgb(236, 72, 153))`
- **渐变方向：** 135度线性渐变

#### 文字色彩层次
- **主标题：** `#ffffff` - 纯白
- **副标题：** `#e2e8f0` - 亮灰
- **正文：** `#94a3b8` - 中灰
- **辅助：** `#64748b` - 暗灰

---

## 📋 图片清单（苹果风重新设计）

### 🔥 第一阶段：5张核心配图

#### 1. hero-ai-background.png
**尺寸：** 1920x1080px | **格式：** PNG | **透明度：** 70%
**用途：** Hero区域背景图

**苹果风设计要求：**
- **背景渐变：**
  - 从左上角 `#000000` 开始
  - 中央过渡 `#0f172a`
  - 右下角回归 `#000000`
  - 135度方向，柔和过渡
  
- **极简神经网络：**
  - **节点：** 2-3px圆点，主色调30%透明度
  - **连线：** 0.5px超细线条，蓝→紫→粉渐变，15%透明度
  - **分布：** 左侧较密，右侧稀疏，为文字预留空间
  
- **苹果风特效：**
  - 毛玻璃质感的微光晕（半径10-15px）
  - 景深效果：前景清晰，后景轻微模糊
  - 24px圆角的大几何形状轮廓（5%透明度暗示）
  
- **整体原则：**
  - 极简主义，避免视觉噪音
  - 不抢夺前景文字注意力
  - 营造深邃科技感

---

#### 2. nexai-a1-chip.png
**尺寸：** 800x600px | **格式：** PNG（透明背景）
**用途：** AI芯片技术展示

**苹果A系列芯片风格：**
- **芯片基板：**
  - 深炭黑色 `#1e293b` 基板
  - 磨砂金属质感
  - 24px大圆角边缘
  
- **电路细节：**
  - 金属铜色接触点 `#f59e0b` (琥珀色)
  - 主色调发光边缘描边（1px，40%透明度）
  - 精密电路纹理（极简线条）
  
- **文字元素：**
  - 中央："12.5 TOPS"（SF Pro Display字体，32px，纯白）
  - 边缘蚀刻："NexAI A1 Bionic"（14px，中灰）
  
- **光效设计：**
  - 边缘毛玻璃光晕（蓝色，模糊15px）
  - 电路节点微光点（2px）
  - 整体阴影：`0 8px 32px rgba(59, 130, 246, 0.15)`

---

#### 3. depin-network-topology.png
**尺寸：** 1200x800px | **格式：** PNG
**用途：** DePIN网络拓扑图

**苹果风网络设计：**
- **背景：**
  - 深空黑 `#000000` 到炭黑 `#0f172a` 径向渐变
  - 星点装饰（1px白点，10%透明度）
  
- **中心节点：**
  - NexAI Phone轮廓（使用现有phone图标）
  - 24px圆角白色描边（20%透明度）
  - 毛玻璃背景效果
  
- **网络节点（极简设计）：**
  1. **Helium** - 72px圆形，橙色渐变 `#f59e0b`
  2. **Filecoin** - 72px圆形，蓝色渐变 `#3b82f6`
  3. **Render** - 72px圆形，绿色渐变 `#10b981`
  4. **Livepeer** - 72px圆形，紫色渐变 `#8b5cf6`
  
- **连接线（苹果风）：**
  - 1px细线，对应节点颜色，25%透明度
  - 线上光点：3px圆点，沿线分布
  - 无复杂动效暗示，保持静态优雅

---

#### 4. security-architecture.png
**尺寸：** 1000x700px | **格式：** PNG
**用途：** 安全架构展示

**苹果风同心圆设计：**
- **背景：**
  - 炭黑到深黑径向渐变
  - 中心向外自然衰减
  
- **安全层级（等距同心圆）：**
  1. **外层-网络安全：** 蓝色圆环，2px描边，15%填充
  2. **应用安全：** 紫色圆环，2px描边，15%填充
  3. **系统安全：** 粉色圆环，2px描边，15%填充
  4. **硬件安全：** 青色圆环，2px描边，15%填充
  5. **核心Secure Enclave：** 金色圆形，渐变填充
  
- **图标系统（SF Symbols风格）：**
  - 盾牌、指纹、锁、芯片图标
  - 24px大小，纯白色，每层1个
  - 圆环边缘均匀分布
  
- **文字标签：**
  - SF Pro Text，14px，中灰色
  - 每层外侧标注功能名称

---

#### 5. earnings-dashboard.png
**尺寸：** 600x400px | **格式：** PNG
**用途：** 收益仪表盘UI

**苹果风Dark Mode界面：**
- **整体布局：**
  - 深炭黑背景 `#0f172a`
  - 24px圆角卡片设计
  - 毛玻璃效果分层

- **数据展示区：**
  - 今日收益：`$24.67`（SF Pro Display，28px，绿色 `#10b981`）
  - 本月收益：`$672.40`（SF Pro Text，16px亮灰）
  - 状态指示：绿色圆点 + "Active"文字
  - 算力显示：`2.4 TH/s`（数据蓝色）

- **图表组件（极简）：**
  - 收益趋势：简洁线图，上升趋势，蓝色渐变填充
  - 网络参与：环形进度条，75%，主色调渐变
  - 算力柱状：3个柱子，高低错落，渐变色

- **UI组件：**
  - 按钮：胶囊形状，主色调渐变，12px圆角
  - 卡片：深灰背景，1px主色调边框
  - 文字：系统字体，清晰层次

---

## 🎨 苹果风设计语言细则

### 视觉原则
- **极简主义：** 移除不必要的装饰元素
- **功能优先：** 每个元素都有明确用途
- **一致性：** 统一的圆角、间距、颜色系统
- **优雅过渡：** 自然的渐变和透明度

### 质感要求
- **毛玻璃效果：** `backdrop-filter: blur(20px)`
- **微妙阴影：** `0 8px 32px rgba(59, 130, 246, 0.15)`
- **圆角系统：** 24px (主要)、12px (次要)、50px (按钮)
- **透明度层次：** 100%、70%、40%、20%、10%

### 字体系统
- **主字体：** SF Pro Display (标题)
- **辅助字体：** SF Pro Text (正文)
- **备选方案：** -apple-system, BlinkMacSystemFont

---

## 🛠️ 制作技术要求

### 文件规格
- **分辨率：** 2x Retina (高DPI)
- **色彩空间：** sRGB
- **格式：** PNG-24（支持透明度）
- **压缩：** 无损压缩，文件大小<2MB

### 兼容性检查
- [ ] 在深色背景下显示正常
- [ ] 色彩对比度符合WCAG标准
- [ ] 支持高分辨率显示器
- [ ] 加载速度优化

### 质量标准
- [ ] 边缘清晰，无锯齿
- [ ] 色彩准确，符合品牌规范
- [ ] 透明度正确
- [ ] 视觉层次清晰

---

## 📱 制作工具推荐

### 专业工具
- **设计：** Figma（推荐）、Sketch
- **3D渲染：** Blender、Cinema 4D
- **修图：** Photoshop、Affinity Photo

### AI辅助工具
- **Midjourney：** 适合概念设计
- **DALL-E 3：** 精确描述生成
- **Stable Diffusion：** 本地控制

---

## 🚀 提交与集成

### 文件命名
请严格按照以下命名保存：
1. `hero-ai-background.png`
2. `nexai-a1-chip.png`
3. `depin-network-topology.png`
4. `security-architecture.png`
5. `earnings-dashboard.png`

### 集成位置
放置在 `public/images/` 目录下，我将立即更新网页代码进行集成。

### 预期效果
完成这5张苹果风酷黑主题图片后，网站将实现：
- 🎯 完美的视觉一致性
- 📱 苹果级别的设计质感
- 🚀 专业的科技产品形象
- ✨ 优雅的用户体验提升

**关键成功因素：** 严格遵循色彩规范，保持极简主义设计理念，确保与现有苹果风酷黑主题完美融合。

---

## 🤖 AI生成提示词（精确版本）

### 🎯 通用提示词前缀
**适用于所有图片的基础设定：**
```
Apple-style design, minimalist, premium dark theme, ultra-clean, professional tech product aesthetic, high-end finish, subtle gradients, soft shadows, perfect lighting, 4K quality, photorealistic
```

**色彩规范提示：**
```
Color palette: deep black (#000000), charcoal (#0f172a), dark gray (#1e293b), electric blue (#3b82f6), violet (#8b5cf6), pink (#ec4899), pure white (#ffffff), light gray (#e2e8f0)
```

---

### 1. 🌌 hero-ai-background.png

**完整提示词：**
```
Ultra-minimalist Apple-style abstract AI neural network background, deep space aesthetic, professional tech presentation style. 

Background: smooth 135-degree gradient from pure black (#000000) top-left to charcoal (#0f172a) center to black bottom-right, seamless transition, no visible boundaries.

Neural network elements: extremely minimal, tiny 2-3px glowing dots in electric blue (#3b82f6), violet (#8b5cf6), pink (#ec4899) with 30% opacity, connected by ultra-thin 0.5px lines with blue-to-violet-to-pink gradient at 15% opacity. Sparse distribution, denser on left side, very sparse on right side for text overlay space.

Apple-style effects: subtle glass-morphism glow around nodes (10-15px blur radius), gentle depth of field with sharp foreground and slightly blurred background, hint of 24px rounded rectangle outlines at 5% opacity suggesting geometric structure.

Overall mood: serene, sophisticated, premium tech aesthetic, clean minimalism, no visual noise, supports text readability, deep space feeling. 

Style: Apple keynote presentation background, premium product photography lighting, ultra-clean finish.

Technical: 1920x1080px, 70% overall opacity, PNG format with transparency, suitable for overlay use.
```

**简化版（Midjourney）：**
```
minimalist Apple-style AI neural network background, deep black to charcoal gradient, tiny glowing blue violet pink dots connected by thin lines, ultra-clean, premium tech aesthetic, space-like, 30% opacity, glass morphism glow, 1920x1080 --style raw --v 6
```

---

### 2. 🔥 nexai-a1-chip.png

**完整提示词：**
```
Apple A-series chip style 3D render, premium semiconductor design, professional product photography.

Chip design: modern AI processor, deep charcoal black (#1e293b) substrate with brushed metal texture, 24px large rounded corners (Apple-style), 60-70% of frame size, centered composition.

Circuit details: minimal geometric patterns, amber/copper (#f59e0b) contact points, ultra-thin circuit traces, precision-engineered appearance, subtle metallic reflections.

Typography: center display "12.5 TOPS" in SF Pro Display font, 32px, pure white (#ffffff), crisp and clear. Edge etching "NexAI A1 Bionic" in 14px medium gray (#94a3b8), laser-engraved appearance.

Lighting: professional product photography lighting, subtle blue glow around edges (#3b82f6) with 15px blur, micro LED light spots (2px) on circuit nodes, premium tech product presentation style.

Effects: soft drop shadow (0 8px 32px rgba(59, 130, 246, 0.15)), glass-morphism edge glow, high-end semiconductor aesthetic.

Background: completely transparent, suitable for various background placements.

Style: Apple product photography, premium tech marketing, ultra-clean finish, professional grade.

Technical: 800x600px, transparent PNG, high DPI, photorealistic quality.
```

**简化版（Midjourney）：**
```
Apple A-series style AI chip 3D render, charcoal black substrate, amber copper contacts, "12.5 TOPS" white text center, "NexAI A1 Bionic" edge, blue glow, 24px rounded corners, premium tech product photography, transparent background, 800x600 --style raw --v 6
```

---

### 3. 🌐 depin-network-topology.png

**完整提示词：**
```
Apple-style network topology diagram, minimalist tech illustration, premium dark theme design.

Background: radial gradient from deep space black (#000000) center to charcoal (#0f172a) edges, scattered 1px white dots at 10% opacity suggesting stars, clean space aesthetic.

Center node: NexAI Phone silhouette outline, 24px rounded corners, white stroke (20% opacity), glass-morphism background effect, sophisticated tech device representation.

Network nodes (minimalist circles, 72px diameter):
- Helium: solid amber gradient (#f59e0b), clean circular design
- Filecoin: electric blue gradient (#3b82f6), modern tech aesthetic
- Render: emerald green gradient (#10b981), vibrant but elegant
- Livepeer: violet gradient (#8b5cf6), premium finish

Connection lines: ultra-thin 1px lines, each matching their respective node colors, 25% opacity, clean straight connections radiating from center. Small 3px light dots distributed along lines suggesting data flow.

Layout: perfect symmetrical radial arrangement, mathematical precision, balanced composition, professional network diagram aesthetic.

Style: Apple system diagram, iOS interface design language, premium tech presentation, clean and functional.

Technical: 1200x800px, PNG format, high contrast for clarity, professional diagram quality.
```

**简化版（Midjourney）：**
```
Apple-style network topology, center phone outline, 4 colorful circular nodes (amber, blue, green, violet), thin connecting lines, space black background, minimalist tech diagram, radial layout, glass morphism, 1200x800 --style raw --v 6
```

---

### 4. 🛡️ security-architecture.png

**完整提示词：**
```
Apple-style security architecture diagram, concentric circles design, premium tech illustration, iOS design language.

Background: charcoal to deep black radial gradient (#0f172a to #000000), center-outward natural fade, clean minimalist backdrop.

Concentric security layers (perfect circles, 2px stroke weight, 15% fill opacity):
1. Outer ring: Network Security - electric blue (#3b82f6) stroke and fill
2. Application Security - violet (#8b5cf6) stroke and fill  
3. System Security - pink (#ec4899) stroke and fill
4. Hardware Security - cyan (#06b6d4) stroke and fill
5. Center core: Secure Enclave - golden gradient (#f59e0b to #fbbf24) solid fill with glow

Icons (SF Symbols style, 24px, pure white):
- Shield icon (network layer)
- Fingerprint icon (application layer)  
- Lock icon (system layer)
- Chip icon (hardware layer)
Positioned on circle perimeters, evenly distributed.

Typography: SF Pro Text, 14px, medium gray (#94a3b8), layer labels positioned outside each circle, clean and readable.

Style: iOS system preferences aesthetic, Apple security presentation design, professional enterprise diagram, clean functional beauty.

Layout: perfect center alignment, mathematical precision, balanced composition.

Technical: 1000x700px, PNG format, high clarity, professional diagram standard.
```

**简化版（Midjourney）：**
```
Apple-style security concentric circles diagram, 5 layers blue violet pink cyan gold, SF symbols icons shield fingerprint lock chip, dark background, iOS design language, clean minimalist, 1000x700 --style raw --v 6
```

---

### 5. 📊 earnings-dashboard.png

**完整提示词：**
```
Apple-style dark mode financial dashboard UI, premium mobile interface design, iOS aesthetic.

Background: deep charcoal (#0f172a) main background, 24px rounded corner cards with subtle glass-morphism effect, modern mobile app interface.

Main data display area:
- "$24.67" in SF Pro Display, 28px, emerald green (#10b981) as prominent earnings figure
- "$672.40" monthly earnings in SF Pro Text, 16px, light gray (#e2e8f0)  
- "Active" status with 8px green dot indicator
- "2.4 TH/s" hashrate in electric blue (#3b82f6), 16px

Chart components (minimal Apple style):
- Earnings trend: clean line chart, upward trajectory, blue gradient fill below line
- Network participation: ring progress indicator at 75%, main color gradient
- Hashrate bars: 3 vertical bars, varying heights, gradient colors, subtle animation suggestion

UI elements:
- Pill-shaped buttons with main color gradient, 12px corner radius
- Card containers: dark gray (#1e293b) background, 1px main color border
- Typography: system font hierarchy, clear visual hierarchy

Color scheme: charcoal background, blue-violet-pink accents, green for positive numbers, white/gray text hierarchy.

Style: iOS financial app, Apple Wallet aesthetic, premium mobile interface, professional fintech design.

Layout: card-based design, clean spacing, intuitive information hierarchy.

Technical: 600x400px, PNG format, mobile-optimized clarity, Retina-ready.
```

**简化版（Midjourney）：**
```
Apple dark mode financial dashboard, "$24.67" green text, charts graphs, charcoal background, glass morphism cards, iOS interface, clean modern mobile UI, blue violet pink accents, 600x400 --style raw --v 6
```

---

## 🎯 提示词使用建议

### 📝 针对不同AI工具的优化

#### Midjourney
- 使用简化版提示词
- 添加 `--style raw --v 6` 参数
- 可以添加 `--ar 16:9` 或对应比例

#### DALL-E 3
- 使用完整提示词
- 强调"Apple-style"和"minimalist"
- 重点描述色彩规范

#### Stable Diffusion
- 使用完整提示词
- 添加负面提示：`cluttered, busy, oversaturated, cartoonish, low quality`
- 推荐模型：Realistic Vision 或 DreamShaper

#### Adobe Firefly
- 使用中等长度提示词
- 强调"professional product photography"
- 重点标注尺寸要求

### 🔧 调优建议

1. **如果颜色不准确：** 强调具体色彩代码
2. **如果过于复杂：** 添加"ultra-minimalist"、"clean"
3. **如果不够苹果风：** 强调"Apple keynote style"、"iOS design language"
4. **如果质量不足：** 添加"4K quality"、"professional photography"

### ✅ 质量检查清单

生成后请检查：
- [ ] 色彩是否符合规范
- [ ] 风格是否足够简洁
- [ ] 是否具备苹果设计特征
- [ ] 分辨率是否达标
- [ ] 透明度是否正确

---

## 🤖 GPT图片生成专用提示词

### 🎯 GPT优化前缀
**适用于所有GPT图片生成的基础设定：**
```
Create a minimalist Apple-style design with premium dark theme aesthetic. Use ultra-clean composition, professional tech product finish, subtle gradients, and soft shadows. Maintain perfect lighting and 4K quality photorealistic rendering.
```

**GPT色彩规范：**
```
Use this exact color palette: deep black (#000000), charcoal gray (#0f172a), dark gray (#1e293b), electric blue (#3b82f6), violet (#8b5cf6), pink (#ec4899), pure white (#ffffff), light gray (#e2e8f0)
```

---

### 1. 🌌 hero-ai-background.png (GPT版本)

**GPT提示词：**
```
Create an ultra-minimalist Apple-style abstract AI neural network background with deep space aesthetic. 

Background: Create a smooth 135-degree gradient from pure black (#000000) at top-left, transitioning to charcoal gray (#0f172a) at center, and returning to black at bottom-right. Make the transition seamless with no visible boundaries.

Neural network elements: Design extremely minimal neural network with tiny 2-3px glowing dots in electric blue (#3b82f6), violet (#8b5cf6), and pink (#ec4899) colors at 30% opacity. Connect these dots with ultra-thin 0.5px lines using blue-to-violet-to-pink gradient at 15% opacity. Distribute sparsely with denser concentration on left side and very sparse on right side to leave space for text overlay.

Apple-style effects: Add subtle glass-morphism glow around nodes with 10-15px blur radius. Create gentle depth of field with sharp foreground and slightly blurred background. Include subtle hints of 24px rounded rectangle outlines at 5% opacity suggesting geometric structure.

Overall mood: Create serene, sophisticated, premium tech aesthetic with clean minimalism, no visual noise, supporting text readability with deep space feeling.

Style: Mimic Apple keynote presentation background with premium product photography lighting and ultra-clean finish.

Technical specifications: 1920x1080px resolution, 70% overall opacity, PNG format with transparency, suitable for overlay use.
```

---

### 2. 🔥 nexai-a1-chip.png (GPT版本)

**GPT提示词：**
```
Create an Apple A-series chip style 3D render with premium semiconductor design and professional product photography.

Chip design: Design a modern AI processor with deep charcoal black (#1e293b) substrate featuring brushed metal texture. Use 24px large rounded corners in Apple-style, making the chip occupy 60-70% of frame size with centered composition.

Circuit details: Create minimal geometric patterns with amber/copper (#f59e0b) contact points and ultra-thin circuit traces. Achieve precision-engineered appearance with subtle metallic reflections.

Typography: Display "12.5 TOPS" in center using SF Pro Display font style, 32px size, pure white (#ffffff) color, crisp and clear. Add "NexAI A1 Bionic" edge etching in 14px medium gray (#94a3b8) with laser-engraved appearance.

Lighting: Apply professional product photography lighting with subtle blue glow around edges (#3b82f6) using 15px blur. Add micro LED light spots (2px) on circuit nodes for premium tech product presentation style.

Effects: Include soft drop shadow (0 8px 32px rgba(59, 130, 246, 0.15)), glass-morphism edge glow, and high-end semiconductor aesthetic.

Background: Make completely transparent, suitable for various background placements.

Style: Apple product photography aesthetic with premium tech marketing, ultra-clean finish, and professional grade quality.

Technical specifications: 800x600px resolution, transparent PNG format, high DPI, photorealistic quality.
```

---

### 3. 🌐 depin-network-topology.png (GPT版本 - 无手机)

**GPT提示词：**
```
Create an Apple-style network topology diagram with minimalist tech illustration and premium dark theme design.

Background: Design radial gradient from deep space black (#000000) at center to charcoal gray (#0f172a) at edges. Add scattered 1px white dots at 10% opacity suggesting stars for clean space aesthetic.

Center element: Create a sophisticated tech hub symbol (not a phone) with 24px rounded corners, white stroke at 20% opacity, and glass-morphism background effect. This should represent a central network node.

Network nodes: Design 4 minimalist circles (72px diameter each) positioned in perfect radial arrangement:
- Helium: solid amber gradient (#f59e0b) with clean circular design
- Filecoin: electric blue gradient (#3b82f6) with modern tech aesthetic  
- Render: emerald green gradient (#10b981) with vibrant but elegant finish
- Livepeer: violet gradient (#8b5cf6) with premium finish

Connection lines: Create ultra-thin 1px lines, each matching their respective node colors at 25% opacity. Make clean straight connections radiating from center. Add small 3px light dots distributed along lines suggesting data flow.

Layout: Achieve perfect symmetrical radial arrangement with mathematical precision, balanced composition, and professional network diagram aesthetic.

Style: Apple system diagram with iOS interface design language, premium tech presentation, clean and functional appearance.

Technical specifications: 1200x800px resolution, PNG format, high contrast for clarity, professional diagram quality.
```

---

### 4. 🛡️ security-architecture.png (GPT版本)

**GPT提示词：**
```
Create an Apple-style security architecture diagram with concentric circles design, premium tech illustration, and iOS design language.

Background: Design charcoal to deep black radial gradient (#0f172a to #000000) with center-outward natural fade for clean minimalist backdrop.

Concentric security layers: Create 5 perfect circles with 2px stroke weight and 15% fill opacity:
1. Outer ring: Network Security - electric blue (#3b82f6) stroke and fill
2. Application Security - violet (#8b5cf6) stroke and fill  
3. System Security - pink (#ec4899) stroke and fill
4. Hardware Security - cyan (#06b6d4) stroke and fill
5. Center core: Secure Enclave - golden gradient (#f59e0b to #fbbf24) solid fill with glow

Icons: Add SF Symbols style icons (24px, pure white) positioned on circle perimeters with even distribution:
- Shield icon for network layer
- Fingerprint icon for application layer  
- Lock icon for system layer
- Chip icon for hardware layer

Typography: Use SF Pro Text style, 14px size, medium gray (#94a3b8) color for layer labels positioned outside each circle, ensuring clean and readable appearance.

Style: iOS system preferences aesthetic with Apple security presentation design, professional enterprise diagram, and clean functional beauty.

Layout: Achieve perfect center alignment with mathematical precision and balanced composition.

Technical specifications: 1000x700px resolution, PNG format, high clarity, professional diagram standard.
```

---

### 5. 📊 earnings-dashboard.png (GPT版本)

**GPT提示词：**
```
Create an Apple-style dark mode financial dashboard UI with premium mobile interface design and iOS aesthetic.

Background: Design deep charcoal (#0f172a) main background with 24px rounded corner cards featuring subtle glass-morphism effect for modern mobile app interface.

Main data display area:
- Display "$24.67" using SF Pro Display font style, 28px size, emerald green (#10b981) color as prominent earnings figure
- Show "$672.40" monthly earnings in SF Pro Text style, 16px size, light gray (#e2e8f0) color
- Include "Active" status with 8px green dot indicator
- Display "2.4 TH/s" hashrate in electric blue (#3b82f6), 16px size

Chart components: Create minimal Apple-style charts:
- Earnings trend: clean line chart with upward trajectory and blue gradient fill below line
- Network participation: ring progress indicator at 75% with main color gradient
- Hashrate bars: 3 vertical bars with varying heights and gradient colors, suggesting subtle animation

UI elements:
- Design pill-shaped buttons with main color gradient and 12px corner radius
- Create card containers with dark gray (#1e293b) background and 1px main color border
- Apply system font hierarchy with clear visual hierarchy

Color scheme: Use charcoal background with blue-violet-pink accents, green for positive numbers, and white/gray text hierarchy.

Style: iOS financial app aesthetic with Apple Wallet design, premium mobile interface, and professional fintech appearance.

Layout: Card-based design with clean spacing and intuitive information hierarchy.

Technical specifications: 600x400px resolution, PNG format, mobile-optimized clarity, Retina-ready quality.
```

---

## 🎯 GPT使用技巧

### 📝 GPT优化建议

1. **详细描述**：GPT需要更详细的描述，所以使用完整版提示词
2. **色彩强调**：明确指定色彩代码，GPT对色彩理解较好
3. **风格指导**：强调"Apple-style"、"minimalist"、"professional"
4. **技术规格**：明确标注尺寸、格式、质量要求

### 🔧 GPT调优策略

- **如果颜色不准确**：重新强调具体色彩代码
- **如果过于复杂**：添加"ultra-minimalist"、"clean"、"simple"
- **如果不够苹果风**：强调"Apple keynote style"、"iOS design language"
- **如果质量不足**：添加"4K quality"、"professional photography"、"high-end"

### ✅ GPT质量检查

生成后验证：
- [ ] 色彩是否符合规范
- [ ] 风格是否足够简洁
- [ ] 是否具备苹果设计特征
- [ ] 分辨率是否达标
- [ ] 透明度是否正确 