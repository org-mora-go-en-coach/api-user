# api-user

Next.js user API supporting registration, lookup, listing, and withdrawal.

- `POST /api/v1.0.1/users` — `{ "email": "learner@example.com", "name": "Learner" }`
- `GET /api/v1.0.1/users`
- `GET /api/v1.0.1/users/:id`
- `DELETE /api/v1.0.1/users/:id`

The unversioned `/api/*` routes remain available as compatibility aliases. New MFE releases should use the versioned base URL declared in `shell-config`.

Set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in Vercel for persistent Turso storage. Without them, local development uses in-memory storage.
