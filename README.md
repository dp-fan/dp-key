# dp-key

Claude CLI 快速启动器 - 管理多个 API key 配置，一键启动 Claude

## 功能特性

- 🚀 快速启动 Claude CLI，自动设置环境变量
- 🔑 管理多个 API key 配置（分组管理）
- 🎯 交互式选择或命令行直接启动
- ⚙️ 自动配置 ANTHROPIC_BASE_URL 等环境变量

## 安装

```bash
npm install -g dp-key
```

## 使用方法

### 快速启动

```bash
# 交互式选择分组并启动 Claude
dp-key

# 使用指定分组启动 Claude
dp-key prod
dp-key dev
```

### 配置管理

```bash
# 添加新分组
dp-key add prod
dp-key add dev

# 列出所有分组
dp-key list

# 编辑分组
dp-key edit prod

# 删除分组
dp-key delete dev
```

### 其他命令

```bash
# 显示帮助
dp-key help

# 显示版本
dp-key version

# 更新到最新版本
dp-key update
```

## 配置说明

配置文件位于 `~/.dp-key/` 目录：
- 每个分组一个 `.key` 文件
- 例如：`~/.dp-key/prod.key`、`~/.dp-key/dev.key`

## 环境变量

启动 Claude 时自动设置：
- `ANTHROPIC_BASE_URL=https://deploy-api.com/`
- `ANTHROPIC_AUTH_TOKEN=<your-key>`
- `CLAUDE_CODE_USE_BEDROCK=0`
- `CLAUDE_CODE_DISABLE_TELEMETRY=1`

## npm 包地址

https://www.npmjs.com/package/dp-key

## 当前版本

v0.0.7
