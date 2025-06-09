# EmotionEval：可扩展的多轮对话情感与语义自动评测平台

**EmotionEval** 提供了一套可扩展、生产级的自动化多轮对话中文聊天机器人评测方案，集成了**Spark 大数据分布式计算**、先进的自然语言处理算法、现代化前端界面，以及端到端的云端部署能力。


## 🚀 技术架构 / Tech Stack

| 层级            | 技术选型（Tech Stack）                             |
| ------------- | -------------------------------------------- |
| 前端 Frontend   | React + Ant Design (UI & Data Visualization) |
| 后端 Backend    | FastAPI (RESTful API) + Nginx (静态&反向代理)      |
| 大数据计算 Compute | **Apache Spark / PySpark (分布式并行处理)**         |
| 算法/模型 Model   | BERTScore (语义相关), SnowNLP (情感分析)             |
| 部署 Deployment | AWS EC2 (云端弹性服务器), Nginx                     |
| CI/CD         | GitHub Actions (自动化测试、构建与部署)                 |

> 项目核心计算基于**Apache Spark**，支持大规模分布式数据处理，适配从本地到云端集群的横向扩展。All components support **CI/CD automation** and are deployed on AWS EC2 for robust, scalable, production-grade operation.



## 🌟 项目亮点 / Highlights

* **端到端自动化**：支持全链路自动评测与结果可视化，从数据采集、Spark 批量并行计算到前端动态展示。
* **高并发大数据**：PySpark 支持分布式/并行数据处理，可轻松扩展至百万级对话日志与模型评测。
* **算法可扩展**：集成 BERT 语义相关性打分、SnowNLP 情感评估，可扩展自定义 NLP 指标。
* **工业级接口**：FastAPI + Nginx，安全、高性能，适合企业和科研落地。
* **云原生部署**：AWS EC2 弹性扩展，云端一键部署、运维友好。
* **CI/CD 自动化**：GitHub Actions 实现自动测试、自动打包与自动部署，保证交付质量与效率。



## 🛠️ 功能特性 / Features

* **情感分析**：SnowNLP 按轮打分，支持情感趋势与累计提升分析。
* **语义相关性**：BERTScore 精准量化 user-bot 回复相关性。
* **模型对比**：支持多版本/多模型自动 A/B/N 实验统计与对比。
* **大数据并行**：基于 Spark 的并行计算，轻松横向扩展至企业级数据量。
* **全流程可视化**：React+Ant Design 实现指标看板与实验报表。
* **API 服务**：FastAPI 提供 RESTful 批量评测与异步任务接口。
* **生产级部署**：nginx 做静态资源与 API 分流，所有服务云端托管。


## 💡 应用场景 / Typical Scenarios

* **情感陪伴与健康机器人**：量化 AI 聊天对用户情绪影响，支撑健康和陪伴类产品。
* **自动模型评测与回归**：模型上线前自动跑批评测，A/B 测试自动数据回流。
* **业务数据驱动**：评测结果可对接 Metabase、Tableau 等 BI，暂未实施。


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

> 大数据量下推荐配置 Spark/YARN/EMR 等分布式集群。

### 3. 网站demo

* 访问：[http://your-ec2-ip/emo-eval-frontend/](http://3.128.173.187/emo-eval-frontend/)


## 📦 依赖环境 / Requirements

* Python 3.8+
* **PySpark (建议3.0+)**
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
* **Spark 分布式计算和云原生架构**，大幅提升生产效率与团队协作，显著降低运维与开发成本。

