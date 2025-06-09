# EmotionEval: Scalable Multi-Turn Chatbot Emotion & Semantic Evaluation

**EmotionEval** delivers a scalable, production-ready pipeline for automated multi-turn conversational AI evaluation in Chinese. It integrates big data analytics, advanced NLP algorithms, modern web UI, and end-to-end cloud deployment.


## 🚀 技术架构 / Tech Stack

| 层级            | 技术选型（Tech Stack）                             |
| -------------  | -------------------------------------------- |
| 前端 Frontend   | React + Ant Design (UI & Data Visualization) |
| 后端 Backend    | FastAPI (RESTful API) + Nginx (静态&反向代理)      |
| 大数据计算 Compute | PySpark (分布式并行处理)                            |
| 算法/模型 Model   | BERTScore (语义相关), SnowNLP (情感分析)             |
| 部署 Deployment | AWS EC2 (云端弹性服务器), Nginx                     |
| CI/CD         | GitHub Actions (自动化测试、构建与部署)                 |

> All components support **CI/CD automation** and are deployed on AWS EC2 for robust, scalable, production-grade operation.


## 🌟 项目亮点 / Highlights

* **端到端自动化**：支持全链路自动评测与结果可视化，从数据采集、批量计算到前端动态展示。
* **高并发大数据**：PySpark 实现全并行处理，轻松应对百万级多轮对话日志。
* **算法可扩展**：集成 BERT 语义相关性打分、SnowNLP 情感评估，可扩展自定义 NLP 指标。
* **工业级接口**：FastAPI + Nginx，安全、高性能，适合企业和科研落地。
* **云原生部署**：AWS EC2 弹性扩展，云端一键部署、运维友好。
* **CI/CD 自动化**：GitHub Actions 实现自动测试、自动打包与自动部署，保证交付质量与效率。


## 🛠️ 功能特性 / Features

* **情感分析**：SnowNLP 按轮打分，支持情感趋势与累计提升分析。
* **语义相关性**：BERTScore 精准量化 user-bot 回复相关性。
* **模型对比**：支持多版本/多模型自动 A/B/N 实验统计与对比。
* **全流程可视化**：React+Ant Design 实现指标看板与实验报表。
* **API 服务**：FastAPI 提供 RESTful 批量评测与异步任务接口。
* **生产级部署**：nginx 做静态资源与 API 分流，所有服务云端托管。


## ☁️ 云部署与 CI/CD / Cloud Deployment & CI/CD

* **云端部署**：所有模块（前端、后端、Spark 任务）均支持在 AWS EC2 上一键部署。生产环境下使用 nginx 做入口代理，支持弹性扩缩容。
* **CI/CD 自动化**：集成 GitHub Actions，代码每次 push 自动触发测试、构建、打包与云端部署。大幅提升开发迭代效率与交付可靠性。
* **自动扩展**：支持横向扩展大数据 Spark 集群，业务高峰自动分配资源。


## 💡 应用场景 / Typical Scenarios

* **情感陪伴与健康机器人**：量化 AI 聊天对用户情绪影响，支撑健康和陪伴类产品。
* **自动模型评测与回归**：模型上线前自动跑批评测，A/B 测试自动数据回流。
* **业务数据驱动**：评测结果可对接 Metabase、Tableau 等 BI，看板一键集成。


## 🏗️ 系统架构图 / System Architecture

```mermaid
flowchart LR
    FE[React + Antd Web UI]
    Nginx[Nginx Gateway]
    API[FastAPI REST API]
    Spark[PySpark Pipeline]
    Model[NLP Models (BERT, SnowNLP)]
    BI[BI Dashboard/Metabase]
    AWS[AWS EC2 Cluster]

    FE-->|HTTPS|Nginx
    Nginx-->|/emo-eval-frontend/|FE
    Nginx-->|/evaluate/|API
    API-->|任务调度|Spark
    Spark-->|模型评测|Model
    Spark-->|Parquet/CSV|BI
    Nginx-->|托管|AWS
    API-->|托管|AWS
    Spark-->|托管|AWS
```


## 🏁 快速开始 / Quick Start

### 1. 数据准备

支持标准 JSON/JSONL 格式聊天日志：

```json
[
  {
    "session_id": "s1",
    "model_version": "Alice",
    "dialogue": [
      {"user_input": "I'm exhausted today.", "bot_reply": "Take it easy, you deserve a break."}
    ]
  }
]
```

### 2. 本地或云端一键运行

```bash
python main.py  # 或通过 FastAPI 提交评测任务
```

### 3. 可视化与报告

* 前端访问：[http://your-ec2-ip/emo-eval-frontend/](http://your-ec2-ip/emo-eval-frontend/)
* 后端 API: [http://your-ec2-ip/evaluate/](http://your-ec2-ip/evaluate/)...
* 评测结果可自动导入 BI/看板系统



## 📦 依赖环境 / Requirements

* Python 3.8+
* PySpark
* SnowNLP
* BERTScore
* FastAPI
* Nginx
* React + Ant Design
* AWS EC2（推荐生产部署）
* GitHub Actions (CI/CD 自动化)
* 可选：Metabase, Tableau


## 📊 示例输出 / Example Output

| model\_version | f1\_avg | emotion\_slope | cumulative\_gain | ... |
| -------------- | ------- | -------------- | ---------------- | --- |
| Elena          | 0.60    | 0.0082         | 0.45             | ... |
| Alice          | 0.58    | -0.0275        | 0.15             | ... |

> 完整指标包括语义得分、情感趋势、会话起止情感等，支持多模型批量对比与可视化输出。

## 💼 商业与团队价值 / Business Value

* 支持企业级 AIGC/聊天机器人团队，自动量化情感提升与模型优劣。
* 持续实验，规范化模型上线前的自动评测、回归与报表。
* 云原生架构、自动化流水线，显著降低运维与开发成本，支持高效协同。

