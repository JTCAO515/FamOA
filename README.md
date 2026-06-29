# FamOA — 家庭OA审批管理系统

家庭内部使用的轻量化 OA 审批管理 Web 应用。

**技术方案：** 纯前端单页应用（HTML + CSS + JavaScript），localStorage 存储，零依赖无后端。

**功能：**
- 三管理员平权登录（预置账号，无注册）
- 发起申请 → 两人审批闭环
- 同意 / 拒绝 + 附注
- 已驳回单据可再次提交
- 完整审批历史记录（永久存储，不可删除）
- 分页浏览

## 快速开始

直接用浏览器打开 `index.html` 即可使用。

预置账号：admin1 / admin2 / admin3，密码均为 `admin123`

## 开发需求文档

完整的产品需求文档见 [`DEVELOPMENT_PROMPT.md`](./DEVELOPMENT_PROMPT.md)，可直接复制给 AI 代码生成工具使用。
