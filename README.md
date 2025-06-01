# 📝 10기 과제 저장소

Git & GitHub 사용 가이드입니다.
각자 **코딩 테스트 문제를 해결하고 푸시**할 때 아래 순서를 따라 주세요!

---

## ✅ 저장소 복제하기 (Clone)

```bash
git clone https://github.com/likelion/10term-assignment.git  
cd 10term-assignment
```

* 저장소 전체가 `10term-assignment` 폴더에 복사됩니다.
* 이후 작업은 이 폴더 안에서 진행하세요.

---

## 🌿 브랜치 생성 후 이동

**각자 이름 이니셜로 브랜치를 만들고 작업해 주세요!**

```bash
git checkout -b [본인 이니셜]
# 예시:
git checkout -b KJY
```

---

## 🧪 코테 풀이 후 커밋하기

### 🔖 폴더 구조 (계층형)
```
10term-assignment/
├── KJY/
│   └── Day1/
│       └── 서울에서 김서방 찾기.js
│       └── 짝수와 홀수.js
│   └── Day2/
│       └── 문제이름.js
└── ...
```

> 본인 이니셜 폴더 → Day별 폴더 → 문제 파일 형식으로 작성
> 예: `KJY/Day1/문제이름.js`

---

### 1. 변경 사항 확인

```bash
git status
```

### 2. 커밋할 파일 스테이징

```bash
git add .
# 또는 특정 파일만:
git add KJY/Day1/문제이름.js
```

### 3. 커밋 메시지 작성

```bash
git commit -m "1일차 과제"
```

> 커밋 메시지는 `n일차 과제` 형식을 사용하세요.
> 예: `1일차 과제`, `2일차 과제`

---

## 🚀 GitHub에 업로드 (Push)

```bash
git push origin [본인 이니셜]
# 예시:
git push origin KJY
```

---

## 📮 Pull Request 보내기

GitHub 웹사이트에서 `Pull Request`를 생성해 주세요.

* **기준 브랜치**: `main`
* **비교 브랜치**: 본인 브랜치 (예: `KJY`)
* **PR 제목 형식**: `이름 n일차 과제`

### 예시

* `김지윤 1일차 과제`
---

처음엔 어렵게 느껴질 수 있지만, 몇 번 반복하면 금방 익숙해질 수 있어요.
궁금한 점은 언제든지 물어보세요 😊
