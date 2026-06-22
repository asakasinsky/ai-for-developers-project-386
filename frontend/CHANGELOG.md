# Changelog

## [1.1.0](https://github.com/asakasinsky/ai-for-developers-project-386/compare/v1.0.0...v1.1.0) (2026-06-22)


### Features

* add E2E tests with Playwright and CI/CD workflow ([9c06500](https://github.com/asakasinsky/ai-for-developers-project-386/commit/9c06500918be94d52e02dd09b28e199393d78f8c))
* add Makefile for common operations ([b93c27f](https://github.com/asakasinsky/ai-for-developers-project-386/commit/b93c27fc2d8fb3bf8cb7bcdb17d4dc095a7c366e))
* add red hover highlight for end-of-day blocked slots ([7b1d1f2](https://github.com/asakasinsky/ai-for-developers-project-386/commit/7b1d1f27076a3294f2fbefba42079fd149342e25))


### Bug Fixes

* add frontend/dist to Docker image ([6503135](https://github.com/asakasinsky/ai-for-developers-project-386/commit/6503135bcec515129599c923a766c135cecffbaf))
* add monorepo-tags false to release-please ([235abdb](https://github.com/asakasinsky/ai-for-developers-project-386/commit/235abdb5770ba9679c2775831dfacc4974fbdd70))
* add repo-url to release-please command ([67f4a0a](https://github.com/asakasinsky/ai-for-developers-project-386/commit/67f4a0a8f9bd2351c4e56cc6cdad95343b828a3e))
* add root endpoint for health check ([7c3af9d](https://github.com/asakasinsky/ai-for-developers-project-386/commit/7c3af9da4225fc7e5739a38e2637f49ac683380e))
* add root package.json and fix release-please setup ([f53ad0d](https://github.com/asakasinsky/ai-for-developers-project-386/commit/f53ad0dc8279ce17545d4f36303d1dd14fb69255))
* **backend:** add CORS middleware for localhost:5173 ([4b00f12](https://github.com/asakasinsky/ai-for-developers-project-386/commit/4b00f128f4293264499bab43f5d3c903d5460788))
* **booking:** correct overlap detection for duration-based slots ([6030028](https://github.com/asakasinsky/ai-for-developers-project-386/commit/6030028d1831b2aa39a3f1d5455ea456761008e4))
* correct PORT handling in Dockerfile ([d1182b1](https://github.com/asakasinsky/ai-for-developers-project-386/commit/d1182b1d4c4cc149e231a21daab2ff44b8cfdcd2))
* disable end-of-day slots when insufficient time remains ([6cb38f6](https://github.com/asakasinsky/ai-for-developers-project-386/commit/6cb38f60cae3ea13982aef8060849fe5f436fc41))
* Dockerfile copy backend to backend/ subdirectory ([f54c25e](https://github.com/asakasinsky/ai-for-developers-project-386/commit/f54c25e027017835249fb43a1f361611ad7525e8))
* **e2e:** improve test robustness with waits and networkidle ([5ea65b2](https://github.com/asakasinsky/ai-for-developers-project-386/commit/5ea65b20fb76c350eab62f084b5ee1211936a724))
* **e2e:** skip empty state test due to test isolation issue ([fc2cc71](https://github.com/asakasinsky/ai-for-developers-project-386/commit/fc2cc71218231ab41b02e88dbaf03f8f9ea933f3))
* **e2e:** use getByText instead of h2 locators ([47432a9](https://github.com/asakasinsky/ai-for-developers-project-386/commit/47432a92d69f3f78c6b6079c103a8476477b6ffe))
* **e2e:** wait for backend ready and start fresh dev server in CI ([094d7eb](https://github.com/asakasinsky/ai-for-developers-project-386/commit/094d7ebd2e0ef96fc090cf260e2aea7970fbae1b))
* move tooltip to parent div for disabled slots ([89172bc](https://github.com/asakasinsky/ai-for-developers-project-386/commit/89172bcd00a19f5e762beb3bdf7e6c26a670fb2f))
* opacity for disabled selected slots in SchedulePage ([a854f52](https://github.com/asakasinsky/ai-for-developers-project-386/commit/a854f5286293a87eef44bfe2a2ad1e15a9a58f0b))
* point release-please to frontend package ([1d2d37a](https://github.com/asakasinsky/ai-for-developers-project-386/commit/1d2d37a7d235cb73942fa55e2ae6df8bc63ef412))
* register SPA fallback after API routes to prevent route conflicts ([6f83c37](https://github.com/asakasinsky/ai-for-developers-project-386/commit/6f83c3754e054e38da06f2d0e99f0e93905c0b0c))
* remove config-file from release-please, use path only ([745d1e8](https://github.com/asakasinsky/ai-for-developers-project-386/commit/745d1e85d2bd76bbab5b4126578ffb7ddea444a0))
* remove frontend from dockerignore to enable Docker build ([aa76811](https://github.com/asakasinsky/ai-for-developers-project-386/commit/aa768111a0a0870e9b7698285294e8486cb7d470))
* serve frontend from backend, update Dockerfile for frontend build ([168db1d](https://github.com/asakasinsky/ai-for-developers-project-386/commit/168db1d6c2971440421ce11682ada8ff1b383afd))
* serve pre-built frontend from backend with correct asset paths ([00d5a1e](https://github.com/asakasinsky/ai-for-developers-project-386/commit/00d5a1e3cd288c9e9e3dfd5424de65986779b689))
* start backend server before E2E tests ([eeaf68f](https://github.com/asakasinsky/ai-for-developers-project-386/commit/eeaf68f2a2991724b7b975cc7e1ceb6431aba7a4))
* track frontend/dist in git for Docker build ([a860ecc](https://github.com/asakasinsky/ai-for-developers-project-386/commit/a860ecc41683ef0e45b9f7e8d7c673826b813a1a))
* update e2e tests and playwright config for CI compatibility ([cfb8544](https://github.com/asakasinsky/ai-for-developers-project-386/commit/cfb85440ff4332f3f7ba105fc0cda8813886100f))
* update release-please action to use path instead of package-name ([ef6837f](https://github.com/asakasinsky/ai-for-developers-project-386/commit/ef6837fcd7e750698ee36481bbf30aea0a70317a))
* use 30-min slots in backend + rebuild frontend ([5247a26](https://github.com/asakasinsky/ai-for-developers-project-386/commit/5247a2619c1f9042fe1db5a8d7fe909e7591e041))
* use relative API URLs instead of /api prefix ([6ea9565](https://github.com/asakasinsky/ai-for-developers-project-386/commit/6ea956507cf08b8195f0dc88200d78378cf655ac))

## 1.0.0 (2026-06-19)


### Features

* add E2E tests with Playwright and CI/CD workflow ([9c06500](https://github.com/asakasinsky/ai-for-developers-project-386/commit/9c06500918be94d52e02dd09b28e199393d78f8c))
