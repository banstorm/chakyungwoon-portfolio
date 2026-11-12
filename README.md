# 차경운 개발자 포트폴리오

AI 에이전트, Web3, SSO·OIDC 플랫폼을 개발하는 차경운의 프로필과 19개 프로젝트를 한 페이지에 소개합니다.

- [포트폴리오 사이트](https://banstorm.github.io/chakyungwoon-portfolio/)
- [원본 PDF](https://banstorm.github.io/chakyungwoon-portfolio/assets/chakyungwoon_portfolio_guide.pdf)

## 로컬에서 보기

저장소 루트에서 `python3 -m http.server 8000`을 실행하고 `http://localhost:8000/`을 엽니다. 설치하거나 빌드할 의존성은 없습니다.

## 프로젝트 및 PDF 교체

프로젝트 설명과 링크는 `index.html`, 인물 및 프로젝트 이미지는 `assets/`에 있습니다. PDF를 교체할 때는 원본을 `assets/chakyungwoon_portfolio_guide.pdf`에 복사하고 HTML 본문도 함께 갱신합니다. 사이트 상단의 **PDF 다운로드** 버튼에서 원본 문서를 받을 수 있습니다.

## 배포

저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. 이후 `main`에 푸시하면 `.github/workflows/deploy-pages.yml`이 사이트를 자동으로 배포합니다. **Actions** 탭에서 같은 워크플로를 수동으로 실행할 수도 있습니다.
