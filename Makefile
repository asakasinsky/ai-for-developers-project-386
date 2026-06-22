.PHONY: start stop test-e2e

start:
	cd backend && uvicorn main:app --port 8000

stop:
	pkill -f "uvicorn" || true

test-e2e:
	cd frontend && npm run test:e2e