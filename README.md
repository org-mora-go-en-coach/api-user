# API User

Mora Go의 사용자 계정 생명주기를 제공하는 Next.js API입니다.

## 구현 내용

- 사용자 등록, 목록 조회와 단일 사용자 조회
- 사용자 탈퇴 처리
- 버전 API와 비버전 호환 경로 제공
- Turso 영구 저장소와 로컬 메모리 저장소 지원

## 주요 API

- `POST /api/v1.0.1/users`
- `GET /api/v1.0.1/users`
- `GET /api/v1.0.1/users/:id`
- `DELETE /api/v1.0.1/users/:id`

## 실행 방법

```bash
npm install
cp .env.example .env.local
npm run dev
```

개발 서버는 `http://localhost:4202`에서 실행됩니다.
