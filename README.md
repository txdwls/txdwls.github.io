# Paper Review Archive

논문 PDF 원본은 로컬에 두고, 공개 가능한 논문 리뷰만 GitHub Pages 블로그로 배포하는 작업장입니다.

## 구조

```text
.
├── blog/                   # 공개 블로그 Jekyll 소스
├── .github/workflows/      # GitHub Pages 배포
└── .gitignore              # 로컬 원본과 생성물 제외
```

## 블로그 운영

- 새 공개 리뷰는 `blog/_posts/YYYY-MM-DD-slug.md`에 작성합니다.
- 초안은 `blog/_drafts/paper-review-template.md`를 복사해서 시작합니다.
- 본문은 Markdown만 쓰고, HTML 태그나 인라인 스타일은 넣지 않습니다.
- 렌더링은 Lil'Log 계열의 `_layouts/review.html`과 `assets/css/style.css`가 담당합니다.
- 원본 PDF와 개인 Obsidian 노트는 그대로 공개하지 않습니다.
- 공개 리뷰에는 논문 요약보다 엔지니어링 판단, 평가 관점, 실패 모드를 우선합니다.

자세한 작성 규칙은 `blog/WRITING.md`를 따릅니다.

## 로컬 미리보기

```bash
BUNDLE_GEMFILE=blog/Gemfile bundle install
BUNDLE_GEMFILE=blog/Gemfile bundle exec jekyll serve --source blog --destination _site
```

브라우저에서 `http://127.0.0.1:4000`을 엽니다.

초안까지 확인하려면 `--drafts`를 붙입니다. Markdown 렌더링 체크용 초안은 `blog/_drafts/markdown-rendering-check.md`입니다.

## GitHub Pages 배포

1. GitHub에 `txdwls.github.io` 저장소를 만듭니다.
2. 공개 블로그 소스만 들어 있는 git 저장소를 연결합니다.
3. Settings → Pages → Build and deployment → Source를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 push하면 `.github/workflows/pages.yml`이 `blog/`를 빌드하고 배포합니다.

배포 URL은 `https://txdwls.github.io/`입니다. 일반 프로젝트 저장소로 배포할 때는 워크플로우가 `/저장소명/` base path를 자동 적용하고, `username.github.io` 저장소는 루트 경로로 배포합니다.
