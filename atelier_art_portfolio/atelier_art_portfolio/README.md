# ATELIER — 미술 포트폴리오 웹사이트

## 구성
- `index.html`: 페이지 내용
- `style.css`: 색상, 글꼴, 레이아웃 및 반응형 디자인
- `script.js`: 작품 분류 버튼과 작품 상세 팝업

## 내 그림으로 바꾸는 방법
1. 프로젝트 폴더에 `images` 폴더를 만듭니다.
2. 그림 파일을 `work-01.jpg`, `work-02.jpg`처럼 넣습니다.
3. `index.html`에서 각 작품의 `<div class="work-image ...">` 부분을 아래처럼 바꿉니다.

```html
<div class="work-image">
  <img src="images/work-01.jpg" alt="작품 제목">
</div>
```

4. `style.css` 맨 아래에 다음 스타일을 추가합니다.

```css
.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

첫 화면 큰 이미지도 `index.html`의 `art-placeholder` 부분을 이미지 태그로 바꾸면 됩니다.
이메일 주소 `your-email@example.com`, 사이트 이름 `ATELIER`, 소개 문구도 원하는 내용으로 수정하세요.

## GitHub Pages로 공개하기
1. GitHub에서 새 Repository를 만듭니다. 예: `my-art-portfolio`
2. 이 폴더 안의 파일 4개를 저장소 최상위에 업로드합니다.
3. 저장소의 **Settings → Pages**로 이동합니다.
4. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/ (root)`로 선택하고 Save를 누릅니다.
6. 잠시 기다리면 Pages 화면에 공개 주소가 표시됩니다.

저장소가 공개(Public)인지 확인하고, `index.html`이 최상위 폴더에 있는지 확인하세요.
