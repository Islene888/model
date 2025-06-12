import React, { useRef } from 'react';
import { Button, message } from 'antd';
import axios from 'axios';

export default function UploadAndAnalyze({ isLoading, setIsLoading, progress, setProgress }) {
  const fileInputRef = useRef();

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/upload', formData);
      message.success('上传成功，开始分析...');
      triggerAnalysis();
    } catch (err) {
      message.error('上传失败');
    }
  };

  const triggerAnalysis = async () => {
    setIsLoading(true);
    setProgress(0);

    try {
      await axios.post('/api/analyze');

      const timer = setInterval(async () => {
        const res = await axios.get('/api/progress');
        setProgress(res.data.progress);
        if (res.data.progress >= 100) {
          clearInterval(timer);
          message.success('分析完成');
          setIsLoading(false);
        }
      }, 1000);
    } catch (err) {
      message.error('分析失败');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input type="file" hidden ref={fileInputRef} onChange={handleUpload} />
      <Button
        type="primary"
        size="large"
        onClick={() => fileInputRef.current.click()}
        style={{
          background: 'linear-gradient(to right, #4f46e5, #9333ea)',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 'bold'
        }}
      >
        Upload Now →
      </Button>
    </div>
  );
}
