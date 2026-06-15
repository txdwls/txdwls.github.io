---
title: "Markdown 렌더링 체크"
paper: "Draft-only rendering fixture"
year: 2026
category: "Draft"
reading_time: "3 min"
status: "비공개 초안"
featured: false
tags: ["markdown", "rendering"]
paper_url: "https://arxiv.org/"
math: true
---

이 파일은 공개 글이 아니라 로컬 초안 미리보기용 렌더링 체크 파일이다. `--drafts` 옵션으로만 보인다.

## 문단과 링크

본문은 Markdown으로만 작성한다. 링크는 [arXiv](https://arxiv.org/)처럼 쓰고, 강조는 **중요한 주장**과 *보조 설명* 정도만 사용한다.

## 인용과 목록

> 좋은 리뷰는 논문 요약에서 멈추지 않고, 실제 시스템에서 어떤 결정을 바꿀지까지 적는다.

- 핵심 주장
- 방법과 평가
- 실패 모드

1. 논문이 해결한 문제를 쓴다.
2. 근거가 된 실험을 쓴다.
3. 엔지니어링 판단으로 변환한다.

## 표

| 축 | 논문에서 본 것 | 리뷰에 남길 것 |
| --- | --- | --- |
| 품질 | 벤치마크 결과 | 재현 조건 |
| 비용 | 학습/추론 자원 | 운영 비용 영향 |
| 실패 | 한계 사례 | 방어 전략 |

## 코드

```python
def review_claim(claim: str, evidence: list[str]) -> bool:
    return bool(claim and evidence)
```

## 수식

$$
\operatorname{Attention}(Q, K, V) = \operatorname{softmax}(QK^\top / \sqrt{d_k})V
$$

## 각주

각주는 긴 부연을 본문 흐름 밖으로 보낼 때만 쓴다.[^note]

[^note]: 공개 리뷰에서는 개인 메모나 원본 PDF 사본을 각주로 붙이지 않는다.
