# 차경운 개발자 포트폴리오

AI 에이전트, Web3, SSO·OIDC 플랫폼을 개발하는 차경운의 프로필과 18개 프로젝트를 한 페이지에 소개합니다.

- [포트폴리오 사이트](https://banstorm.github.io/chakyungwoon-portfolio/)
- [최신 포트폴리오 PDF](https://banstorm.github.io/chakyungwoon-portfolio/assets/chakyungwoon_portfolio_guide.pdf)

## 로컬에서 보기

저장소 루트에서 `python3 -m http.server 8000`을 실행하고 `http://localhost:8000/`을 엽니다. 설치하거나 빌드할 의존성은 없습니다.

## 프로젝트 및 PDF 교체

프로젝트 설명과 링크는 `index.html`, 인물 및 프로젝트 이미지는 `assets/`에 있습니다. 사이트 상단의 **PDF 다운로드** 버튼에서 현재 홈페이지의 프로젝트 18개와 비즈폼 5인 개발팀 기술 리딩을 반영한 PDF를 받을 수 있습니다.

홈페이지를 수정한 뒤에는 로컬 서버 주소를 Chrome에서 열고 인쇄 메뉴에서 **PDF로 저장**을 선택합니다. 용지는 **A4**, 여백은 **기본값**, 배율은 **100%**로 설정합니다. **배경 그래픽**을 켜고 브라우저의 **머리글 및 바닥글**을 끄면 `print.css`에 정의된 인쇄 스타일이 적용됩니다. 저장한 PDF를 `assets/chakyungwoon_portfolio_guide.pdf`에 넣습니다.

## 배포

저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. 이후 `main`에 푸시하면 `.github/workflows/deploy-pages.yml`이 사이트를 자동으로 배포합니다. **Actions** 탭에서 같은 워크플로를 수동으로 실행할 수도 있습니다.
