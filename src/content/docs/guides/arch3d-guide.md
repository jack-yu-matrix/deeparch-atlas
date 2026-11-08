---
title: Arch3D Usage Guide
description: how to use Arch3D scene builder for your doc
---

# ARCH3D Scene Builder 使用指南

## 快速开始

### 点击直接打开
[Arch3D Scene Builder](../../arch3d/arch3d-scene-builder)

arch3d.js 已经内联在 HTML 中，**无需网络、无需 CDN、无需本地服务器**。打开后会自动加载「最小示例」预设，右侧即可看到 3D 场景预览。

---

## 界面布局

```
┌──────────────────────────┬──────────────────────────┐
│    左侧面板 (420px)       │     右侧预览区            │
│                          │                          │
│  [✏️编辑] [📋JSON] [📥导入] │   3D Canvas 实时渲染      │
│                          │                          │
│  + 节点  + 连线  + 粒子   │   🖱 拖拽旋转             │
│  🔄 预览                 │   🖱 滚轮缩放             │
│                          │   🖱 双击复位             │
│  ▼ 节点列表               │   🖱 悬停看详情            │
│  ▼ 节点编辑               │   🖱 点击选中节点          │
│  ▼ 连线列表               │                          │
│  ▼ 粒子流列表              │                          │
│  ▼ 场景设置               │                          │
│  ▼ 模式编辑               │                          │
│  ▼ 焦点编辑               │                          │
│  ▼ 图例编辑               │                          │
│  ▼ KPI编辑                │                          │
│  ▼ 时间轴编辑              │                          │
└──────────────────────────┴──────────────────────────┘
```

### 三个 Tab

| Tab | 用途 |
|-----|------|
| **✏️ 编辑** | 可视化表单编辑场景数据 |
| **📋 JSON** | 直接编辑原始 JSON，自由修改所有字段 |
| **📥 导入/导出** | 从文件导入、粘贴 JSON、下载 JSON、加载预设 |

---

## 工作流程

### 方式 1: 从预设开始（推荐新手）

1. 点击 **📥 导入/导出** Tab
2. 在「预设场景」中选择一个：
   - **最小示例** — 2 个节点 + 1 条线 + 1 个粒子流
   - **星系示例** — 19 个节点，轨道旋转 + globe 装饰
   - **分层示例** — 5 层平面 + 节点 + 立方体
   - **立方体示例** — 展示所有 5 种节点类型
3. 回到 **✏️ 编辑** Tab 修改场景

### 方式 2: 从零构建

```
1. 场景设置 → 修改标题/Span/相机/网格
2. + 节点 → 填写 ID/标签/位置/类型 → 💾 保存
3. 重复添加所需节点
4. + 连线 → 填写 From/To → 💾 保存
5. + 粒子流 → 填写路径 → 💾 保存
6. 🔄 预览 → 右侧实时更新
```

### 方式 3: 粘贴 JSON（推荐熟手）

1. 点击 **📋 JSON** Tab
2. 粘贴完整场景 JSON
3. 点击 **🔄 从JSON预览**
4. 需要微调时可以切到 **✏️ 编辑** Tab 用表单修改

### 方式 4: 从教学页导入场景

1. 打开 `smart-customer-sevice.html`（教学版架构文档）
2. 在 DevTools Console 中执行：
   ```javascript
   copy(document.getElementById('s3-idx-galaxy').textContent)
   ```
3. 回到 Builder 的 **📥 导入/导出** → 粘贴 → **📥 导入并预览**

---

## 节点类型速查

| kind | 说明 | 额外字段 |
|------|------|---------|
| **sphere** | 球体，默认 | r, color, orbit |
| **core** | 球体 + 3 条轨道环 | r, color, orbit |
| **cube** | 3D 立方体 | w, d, h |
| **slab** | 扁平立方体 | w, d, h |
| **plane** | 半透明平面 | w, d |
| **ring** | 圆环 | R, axis (x/y/z) |
| **label** | 纯文本标签 | side |
| **anchor** | 不可见锚点 | - |

### 节点位置坐标系

```
      Z+ (上/屏幕外)
       │
       │   Y+ (右)
       │  /
       │ /
  ─────●───── X+ (屏幕右侧)
      /│
     / │
   Y-  │
      Z- (下/屏幕内)
```

坐标原点在场景中心，建议范围 span[0] × span[1] 内。

---

## 交互操作（预览区）

| 操作 | 效果 |
|------|------|
| 鼠标拖拽 | 旋转视角 |
| 鼠标滚轮 | 缩放（需先点击画布激活） |
| 双击 | 复位视角 |
| 悬停节点 | 显示详情 Tooltip |
| 点击节点 | 选中并显示信息面板 |
| 工具栏 ⟳ | 切换自动旋转 |
| 工具栏 ✦ | 开关粒子流 |
| 工具栏 ⌖ | 复位视角 |

---

## 高级功能

### 模式切换 (Modes)

在「模式编辑」中添加多个模式，预览区顶部会出现切换按钮。

```json
// 基础模式（表单可编辑）
{ "label": "分层", "deco": false, "hide": ["plane1","plane2"] }

// 高级模式（JSON Tab 编辑）
{ "label": "分层", "pos": { "node1": [100,200,50] }, "flows": { "flow1": 0.5 } }
```

### 焦点过滤 (Focus)

在「焦点编辑」中添加焦点，预览区顶部会出现过滤按钮。

```json
{ "label": "Email", "tags": ["email"] }  // 只显示 tags 含 "email" 的节点/连线/粒子
{ "label": "全部" }                       // 空 tags = 全部
```

### 时间轴 (Timeline)

在「时间轴编辑」中编写阶段 JSON，获得自动循环状态机。

```json
{
  "inject": 1,
  "phases": [
    { "name": "正常", "dur": 7, "color": "#4ade80",
      "weights": { "f1": 1 }, "nodes": { "node1": { "state": "OK" } } },
    { "name": "故障", "dur": 6, "color": "#f87171",
      "weights": { "f1": 0.3 }, "nodes": { "node1": { "color": "#f87171", "state": "FAIL" } } }
  ]
}
```

### Globe / Torus 装饰

在「场景设置」中设置 Globe 半径 > 0 启用线框球体装饰，Torus 大环 R > 0 启用环形轨道装饰。

---

## 嵌入到其他页面

Builder 导出的 JSON 结构完全兼容 arch3d.js 引擎。要将场景嵌入到任意 HTML 页面：

```html
<!-- 任意 HTML 页面中 -->
<div class="s3" data-scene="my-scene" style="--h:600px"></div>
<script type="application/json" id="s3-my-scene">
  <!-- 粘贴从 Builder 导出的 JSON -->
</script>
<!-- arch3d.js 已内联在此 HTML 中，无需单独引用 -->
```

将上面三部分（div + script + arch3d.js）放入页面即可。arch3d.js 引擎源文件位于项目根目录 `arch3d.js`（约 1267 行，Canvas 2D 手写透视投影，零外部依赖）。

---

## 已验证的 17 个教学场景

Builder 完整覆盖教学页 `smart-customer-sevice.html` 中的全部 17 个 3D 场景，涵盖所有引擎特征：

| 场景 | 节点数 | 特效 | 页面 |
|------|--------|------|------|
| 技术架构 3D 星系 | 36 | globe, modes(2), focus(7) | 总览 |
| 三条对客链路汇流 | 26 | focus(3), sway | 01-channels |
| Ticketing System 拉取 | 13 | focus(4) | 02-zendesk-ingest |
| Agent v2 流水线螺旋 | 62 | curves, modes(2), ring | 03-agent-core |
| circuit-breaker 时间轴 | 9 | **timeline**(6 phases), HUD | 04-llm-shutter |
| 八道闸隧道 | 14 | ring, particlesOnTop | 05-review-quality |
| 质量闭环环面 | 11 | **torus**, knot, ring | 05-review-quality |
| 知识库接入 | 22 | focus(4) | 06-knowledge-base |
| 存储立方体 | 12 | cube, slab | 07-storage |
| 接口资金球 | 25 | globe, ring | 08-interfaces |
| 三层容错 | 11 | slab, spread | 09-resilience-recovery |
| AI 可观测性 | 19 | focus(5) | 10-observability |
| api-mock 分流 | 11 | focus(3), ring | 11-mock-testing |
| 测试倒金字塔 | 18 | slab, spread | 11-mock-testing |
| 发布流程 | 26 | cube, ring | 12-ops-config |
| 演进螺旋 | 58 | curves | 13-evolution-runbook |
| 治理闭环环面 | 8 | torus, knot, ring | 13-evolution-runbook |

---

## 常见问题

**Q: 预览区空白？**
A: arch3d.js 已内联在 Builder 中，无需网络。如果预览区空白，请检查浏览器控制台是否有 JavaScript 错误。确保用现代浏览器（Chrome / Firefox / Edge）打开。

**Q: 节点不显示？**
A: 检查节点 span 范围，默认 [1400, 820]，坐标不要超出太远。

**Q: 粒子不流动？**
A: 检查 flow 的 path 是否引用了已存在的节点 ID，且连线 (edge) 覆盖了 path 的路径。

**Q: 如何用 kind="knot" 粒子流？**
A: 在 JSON Tab 中编写：
```json
{ "id": "k1", "kind": "knot", "R": 300, "r": 60, "p": 1, "q": 7, "count": 20, "color": "#fbbf24", "uSpeed": -0.04 }
```

**Q: 导出后如何在独立页面中使用？**
A: 复制一份 arch3d.js、场景 div + JSON script，三者一起放入 HTML 即可，详见上方「嵌入到其他页面」。