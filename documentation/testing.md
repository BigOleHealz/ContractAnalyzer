# Testing Guidelines

## Running Tests Locally

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Unit Tests**
   ```bash
   npm test
   ```

3. **Run End-to-End Tests**
   ```bash
   npm run test:e2e
   ```

## Writing Tests

- Follow the existing test patterns in `src/__tests__` for unit tests.
- Place end-to-end tests in the `tests/e2e` directory.
- Ensure each test is independent and can run in isolation.
- Use mocking and stubbing to isolate components where necessary.
