import { expect, test } from "@playwright/test";

test("1. 현재 사용자 API 경로를 안내한다", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "User API" })).toBeVisible();
  await expect(page.getByText("GET /api/v1.0.1/users")).toBeVisible();
  await expect(page.getByText("POST /api/v1.0.1/users")).toBeVisible();
  await expect(page.getByText("DELETE /api/v1.0.1/users/:id")).toBeVisible();
});
