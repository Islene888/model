import React, { useState } from 'react';
import { Button, message } from 'antd';
import { CodeOutlined, LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

const sampleJson = {
  dialogue_id: 'demo-001',
  user_messages: ['Hi, how are you?', 'Can you help me with my order?'],
  model_responses: ['I\'m good! How can I assist?', 'Sure, please provide the order number.']
};

export default function TryDemoPanel() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const json = JSON.parse(input);
      await axios.post('/api/analyze_demo', { data: json });
      message.success('分析任务已启动！');
    } catch (err) {
      message.error('请检查 JSON 格式是否正确');
    } finally {
      setLoading(false);
    }
  };

  const handleInsertSample = () => {
    setInput(JSON.stringify(sampleJson, null, 2));
    message.info('已插入示例代码');
  };

  return (
    <section className="mt-10 mb-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white dark:bg-neutral-900 text-black dark:text-white p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-800">

        {/* 标题行 */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🧪 在线体验评估系统
          </h2>
          <Button
            type="dashed"
            size="small"
            icon={<CodeOutlined />}
            onClick={handleInsertSample}
          >
            插入示例
          </Button>
        </div>

        {/* 引导文字 */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          粘贴一段对话日志 <span className="text-green-600 dark:text-green-400 font-mono">JSON</span>，或使用右上角按钮。
        </p>

        {/* 自定义 TextArea */}
        <textarea
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="请输入聊天 JSON 对话日志..."
          className="w-full font-mono text-sm leading-relaxed rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 p-3 resize-none"
        />

        {/* 按钮 */}
        <div className="mt-6 text-center">
          <Button
            type="primary"
            size="large"
            loading={loading}
            onClick={handleAnalyze}
            icon={loading ? <LoadingOutlined /> : null}
            className="px-10 rounded-xl"
          >
            开始分析
          </Button>
        </div>
      </div>
    </section>
  );
}
