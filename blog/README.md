# Blog Source

이 폴더는 GitHub Pages로 배포되는 공개 논문 리뷰 블로그 소스입니다.

## 새 리뷰 작성

1. `blog/_drafts/paper-review-template.md`를 복사합니다.
2. 파일명을 `blog/_posts/YYYY-MM-DD-paper-slug.md`로 바꿉니다.
3. front matter의 `title`, `paper`, `year`, `category`, `reading_time`, `status`를 채웁니다.
4. 본문은 Markdown만 씁니다. HTML 태그, 인라인 스타일, CSS class는 글 안에 넣지 않습니다.
5. 렌더링 스타일은 `_layouts/review.html`과 `assets/css/style.css`가 담당합니다.
6. 본문은 요약보다 엔지니어링 판단과 실패 모드를 우선합니다.

자세한 작성 규칙은 `blog/WRITING.md`를 따릅니다.

## Markdown 미리보기

```bash
BUNDLE_GEMFILE=blog/Gemfile bundle exec jekyll serve --source blog --destination _site --drafts
```

초안 렌더링 체크용 파일은 `blog/_drafts/markdown-rendering-check.md`입니다.

## 주요 파일

- `_layouts/default.html`: 좌측 내비게이션과 전체 쉘
- `_layouts/review.html`: 논문 리뷰 글 레이아웃
- `_data/reading_path.yml`: 홈의 읽기 경로 데이터
- `assets/css/style.css`: 편집형 블로그 스타일
