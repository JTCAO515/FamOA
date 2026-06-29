// 金斤微OA审批 — Server酱推送 API
// 部署在 Vercel Serverless

const SENDKEYS = {
  // JT 提交时 → 通知 ViVi（填 ViVi 的 Key）
  admin2: 'SCT372167TzXaXzYFZ5Kt0gR0mTzbywSWU',
  // ViVi 提交时 → 通知 JT（填 JT 的 Key）
  admin1: 'SCT372166T7GR4ZXZrVPi2XwNtWTpCBHEc'
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { submitter, submitterName, description, category, budget, id } = req.body;
  const sendkey = SENDKEYS[submitter];

  if (!sendkey) {
    return res.status(200).json({ code: 0, message: '无需推送（对方未配置）' });
  }

  const title = `金斤微OA审批 - 新申请提醒`;
  const content = [
    `**${submitterName}** 提交了新的申请`,
    ``,
    `📌 **${description}**`,
    `📂 类别：${category}`,
    budget ? `💰 金额：¥${Number(budget).toLocaleString()}` : '',
    `🔗 [查看详情](https://oa.jtcao.space)`,
    `━━━━━━━━━━━━━━━`,
    `请尽快登录审批`
  ].filter(Boolean).join('\n');

  try {
    const response = await fetch(`https://sct.ftqq.com/${sendkey}.send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
