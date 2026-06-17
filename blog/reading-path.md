---
layout: page
title: "LLM·Vision 관심 논문"
description: "LLM과 Vision을 공부하면서 보고 싶은 논문과 주제를 모아둔 목록입니다."
permalink: /reading-path/
---

## Transformer {#transformer}

- Attention Is All You Need
- RoFormer / RoPE
- bfloat16 for Deep Learning Training

핵심 질문: 모델 구조, 위치 정보, 수치 정밀도가 학습과 추론에 어떤 제약을 만드는가.

## Scaling {#scaling}

- Scaling Laws for Neural Language Models
- Chinchilla

핵심 질문: 모델 크기, 데이터, compute budget 사이의 균형을 어떻게 잡을 것인가.

## Agents {#agents}

- GPT-3
- Chain-of-Thought
- ReAct
- Toolformer
- Tree of Thoughts
- Reflexion

핵심 질문: reasoning, tool use, self-reflection을 제품 흐름에 넣을 때 어디서 실패하는가.

## Alignment {#alignment}

- InstructGPT
- Constitutional AI
- Direct Preference Optimization

핵심 질문: 선호 데이터와 정책 최적화는 모델 행동을 어떻게 바꾸는가.

## RAG {#rag}

- Dense Passage Retrieval
- Retrieval-Augmented Generation
- HyDE
- Self-RAG
- GraphRAG

핵심 질문: 검색 품질, citation, freshness, faithfulness를 어떻게 분리해서 평가할 것인가.

## Serving {#serving}

- LoRA
- QLoRA
- GPTQ
- AWQ
- FlashAttention
- Speculative Decoding
- vLLM / PagedAttention
- Mixture of Experts

핵심 질문: 메모리, latency, throughput, 비용을 어떤 조합으로 줄일 것인가.

## Multimodal {#multimodal}

- CLIP
- LLaVA

핵심 질문: text-only LLM 지식을 vision-language system으로 확장할 때 어떤 평가가 필요한가.

## Object Detection {#object-detection}

- R-CNN / Fast R-CNN / Faster R-CNN
- YOLO
- SSD
- DETR
- RT-DETR

핵심 질문: region proposal, one-stage detector, transformer detector는 속도와 정확도, 학습 안정성에서 어떻게 갈라지는가.

## Segmentation {#segmentation}

- Fully Convolutional Networks
- U-Net
- DeepLab
- Mask R-CNN
- Segment Anything

핵심 질문: semantic segmentation, instance segmentation, promptable segmentation은 어떤 문제 설정과 데이터 요구사항을 갖는가.
