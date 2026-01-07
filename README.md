# 한국인 종교성 연구 설문조사 웹사이트

## 📋 개요

이 프로젝트는 한국인의 종교성에 관한 연구 설문조사를 위한 웹 애플리케이션입니다.

## 🚀 Vercel 배포 방법

### 1단계: GitHub에 코드 업로드

```bash
# 새 저장소 생성 후
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2단계: Vercel에 배포

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 연결
4. "Import" 클릭
5. "Deploy" 클릭

### 3단계: Supabase 설정 (데이터 수집용)

#### 3-1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 가입/로그인
2. "New Project" 클릭
3. 프로젝트 이름 입력 및 비밀번호 설정
4. 리전 선택 (Northeast Asia (Tokyo) 권장)

#### 3-2. 데이터베이스 테이블 생성

Supabase 대시보드에서 SQL Editor로 이동하여 다음 쿼리 실행:

```sql
-- 설문 응답 테이블 생성
CREATE TABLE survey_responses (
    id BIGSERIAL PRIMARY KEY,
    response_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security 활성화
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- 삽입 정책 생성 (누구나 삽입 가능)
CREATE POLICY "Allow anonymous inserts" ON survey_responses
    FOR INSERT
    WITH CHECK (true);

-- 조회 정책 생성 (인증된 사용자만 조회 가능)
CREATE POLICY "Allow authenticated reads" ON survey_responses
    FOR SELECT
    USING (auth.role() = 'authenticated');
```

#### 3-3. Vercel 환경 변수 설정

1. Vercel 프로젝트 대시보드 → Settings → Environment Variables
2. 다음 변수 추가:

| 변수 이름 | 값 |
|----------|-----|
| `SUPABASE_URL` | Supabase 프로젝트 URL (Settings > API에서 확인) |
| `SUPABASE_ANON_KEY` | Supabase anon public 키 (Settings > API에서 확인) |

3. "Redeploy" 클릭하여 변경사항 적용

## 📊 데이터 확인 방법

### Supabase 대시보드에서 확인

1. Supabase 대시보드 → Table Editor
2. `survey_responses` 테이블 선택
3. 수집된 응답 데이터 확인

### 데이터 내보내기

1. Table Editor에서 데이터 선택
2. "Export" 버튼 클릭
3. CSV 또는 JSON 형식으로 다운로드

### SQL로 데이터 분석

```sql
-- 전체 응답 수
SELECT COUNT(*) FROM survey_responses;

-- 최근 응답 10개
SELECT * FROM survey_responses 
ORDER BY created_at DESC 
LIMIT 10;

-- 날짜별 응답 수
SELECT 
    DATE(created_at) as date,
    COUNT(*) as count
FROM survey_responses
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- 특정 질문 응답 분석 (예: 종교)
SELECT 
    response_data->>'religion' as religion,
    COUNT(*) as count
FROM survey_responses
GROUP BY response_data->>'religion';
```

## 📁 프로젝트 구조

```
survey-website/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # 클라이언트 JavaScript
├── api/
│   └── submit.js       # Vercel Serverless Function
├── package.json        # 프로젝트 설정
├── vercel.json         # Vercel 배포 설정
└── README.md           # 이 파일
```

## 🔧 로컬 개발

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

## ⚙️ 환경 변수

| 변수 | 설명 | 필수 |
|-----|------|-----|
| `SUPABASE_URL` | Supabase 프로젝트 URL | 예 |
| `SUPABASE_ANON_KEY` | Supabase 공개 API 키 | 예 |

## 📱 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 진행률 표시
- ✅ 섹션별 유효성 검사
- ✅ 자동 데이터 저장
- ✅ 오프라인 백업 (localStorage)
- ✅ 접근성 지원

## 🔒 보안

- 모든 데이터는 HTTPS로 전송됩니다
- Supabase Row Level Security로 데이터 보호
- 개인 식별 정보 수집 없음 (익명 설문)

## 📞 문의

연구 관련 문의: research@example.com

---

© 2024 한국인 종교성 연구
