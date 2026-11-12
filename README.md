# 차경운 개발자 포트폴리오

AI 에이전트, Web3, SSO·OIDC 플랫폼을 개발하는 차경운의 기술과 경력 포트폴리오입니다.

- [포트폴리오 사이트](https://banstorm.github.io/chakyungwoon-portfolio/)
- [원본 PDF](https://banstorm.github.io/chakyungwoon-portfolio/assets/chakyungwoon_portfolio_guide.pdf)

## 로컬에서 보기

저장소 루트에서 `python3 -m http.server 8000`을 실행하고 `http://localhost:8000/`을 엽니다. 설치하거나 빌드할 의존성은 없습니다.

## PDF 교체

기존 영상 및 사이트 링크를 보존하려면 PDF 원본을 `assets/chakyungwoon_portfolio_guide.pdf`에 복사합니다. 첫 페이지를 WebP로 변환해 `assets/portfolio-cover.webp`에 저장합니다. 표지 해상도가 달라지면 `index.html`의 이미지 크기와 Open Graph 이미지 크기도 맞춥니다.

데스크톱의 기본 PDF 뷰어를 사용합니다. 화면 크기와 브라우저에 관계없이 PDF 섹션의 **새 창에서 PDF 보기**와 **PDF 다운로드** 링크를 이용할 수 있습니다.

## 배포

저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. 이후 `main`에 푸시하면 `.github/workflows/deploy-pages.yml`이 사이트를 자동으로 배포합니다. **Actions** 탭에서 같은 워크플로를 수동으로 실행할 수도 있습니다.
