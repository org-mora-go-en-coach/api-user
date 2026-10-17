# api-user

Next.js user API supporting registration, lookup, listing, and withdrawal.

- `POST /api/users` — `{ "email": "learner@example.com", "name": "Learner" }`
- `GET /api/users`
- `GET /api/users/:id`
- `DELETE /api/users/:id`

Set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in Vercel for persistent Turso storage. Without them, local development uses in-memory storage.
