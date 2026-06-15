# Writing Rules

이 블로그는 글 작성 형식만 Markdown이고, 렌더링 스타일은 Lil'Log 계열의 Jekyll 레이아웃과 CSS가 전담한다.

## 원칙

- 글 파일은 `blog/_posts/YYYY-MM-DD-slug.md`에 둔다.
- 초안은 `blog/_drafts/paper-review-template.md`를 복사해서 시작한다.
- 본문에는 HTML 태그, 인라인 스타일, CSS class를 쓰지 않는다.
- 표, 코드블록, 인용, 각주, 목록, 링크는 모두 Markdown 문법으로 쓴다.
- 논문 원문 링크, 태그, 수식 사용 여부는 front matter로만 제어한다.
- 원본 PDF, 개인 Obsidian 노트, 비공개 감상은 공개 글에 넣지 않는다.

## Front Matter

```yaml
---
title: "리뷰 제목"
paper: "논문 원제"
year: 2024
category: "Transformer"
reading_time: "15 min"
status: "초안"
featured: false
tags: ["transformer", "attention"]
paper_url: "https://arxiv.org/abs/0000.00000"
math: false
---
```

`math: true`인 글에서만 MathJax를 로드한다. 수식이 없는 글은 `false`로 둔다.

## Markdown 문법

````markdown
## 핵심 아이디어

> 논문의 핵심 주장을 한 문장으로 압축한다.

- 방법
- 결과
- 실패 모드

| 비교 축 | 논문 주장 | 내가 확인할 것 |
| --- | --- | --- |
| 품질 | - | - |
| 비용 | - | - |

```python
def check_evidence(claim, evidence):
    return bool(claim and evidence)
```

[^note]: 각주는 공개 가능한 보충 설명에만 사용한다.
````

## 로컬 확인

```bash
cd /Users/sungjin/papers
BUNDLE_GEMFILE=blog/Gemfile bundle exec jekyll serve --source blog --destination _site --drafts
```

초안 렌더링 확인은 `blog/_drafts/markdown-rendering-check.md`로 한다. 최종 공개 빌드는 `--drafts` 없이 실행한다.
