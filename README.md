# Node.js + Express + TypeScript Starter Template

A reusable backend starter template built with Node.js, Express, and TypeScript. It provides a structured foundation for building REST APIs with centralized configuration, validation, error handling, logging, and basic security middleware.

The goal is to avoid repeating backend setup for every project while keeping the architecture simple and extensible.

## Features

- **TypeScript** — static type checking.
- **Express** — HTTP server and routing.
- **Zod** — environment and request validation.
- **Centralized error handling** — consistent application error handling.
- **Custom error class** — structured application errors.
- **Winston** — application logging.
- **Correlation IDs** — trace requests through application logs.
- **Helmet** — security-related HTTP headers.
- **CORS** — configurable cross-origin browser access.
- **Express Rate Limit** — limit repeated requests.
- **Layered architecture** — routers, controllers, services, and repositories.
- **Environment configuration** — centralized configuration with validation.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express | Web framework |
| TypeScript | Static typing |
| Zod | Schema validation |
| Winston | Logging |
| Helmet | Security headers |
| CORS | Cross-origin access control |
| Express Rate Limit | Request rate limiting |

## Project Structure

```text
src/
├── config/
│   ├── env.ts
│   └── logger.config.ts
├── routers/
│   └── v1/
│       ├── index.router.ts
│       ├── test.router.ts
│       └── user.router.ts
├── controllers/
│   └── users.controller.ts
├── services/
│   └── users.service.ts
├── repositories/
│   └── users.repository.ts
├── middlewares/
│   ├── correlation-id.middleware.ts
│   ├── error-handler.middleware.ts
│   └── validate.middleware.ts
├── validators/
│   └── user.validator.ts
├── utils/
│   ├── errors/
│   │   └── app.error.ts
│   └── helpers/
│       └── request.helpers.ts
├── app.ts
└── server.ts
```

*Adjust this structure to match the files currently present in your repository.*

## Prerequisites

Install:

- [Node.js](https://nodejs.org/) — preferably a supported LTS version.
- npm — included with Node.js.
- Git — for version control.

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

Replace the placeholders with your actual repository URL and directory name.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env`.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**Git Bash or Linux:**

```bash
cp .env.example .env
```

Set the variables required by your application. Never commit `.env` or put real credentials in `.env.example`.

### 4. Start the development server

```bash
npm run dev
```

### 5. Build the application

```bash
npm run build
```

### 6. Run the production build

```bash
npm start
```

These commands assume the corresponding scripts exist in `package.json` and the TypeScript build outputs to `dist/`. Verify the actual scripts and output paths before using this README for a release.

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Compile TypeScript |
| `npm start` | Run the compiled application |
| `npm run typecheck` | Check TypeScript types |
| `npm test` | Run the configured test command |

## Architecture

The application follows a layered architecture:

```text
HTTP Request
     ↓
   Router
     ↓
 Controller
     ↓
   Service
     ↓
 Repository
     ↓
   Data Source
```

### Router

Matches the HTTP method and URL, then directs the request to the appropriate controller.

### Controller

Handles HTTP requests and responses. It calls the service and sends the appropriate status code and response body.

### Service

Contains application or business logic and coordinates operations.

### Repository

Handles data access, such as retrieving, creating, updating, or deleting records. The current sample repository uses in-memory data rather than a database.

**Request flow:** Router → Controller → Service → Repository.

**Return flow:** Repository → Service → Controller → HTTP response.

## Middleware and Configuration

### Environment validation

Zod validates environment variables centrally so invalid configuration can be detected at startup.

### Request validation

Zod schemas validate incoming request data before it reaches the controller.

### Error handling

Custom application errors and centralized error middleware help maintain consistent error handling.

### Correlation IDs

Each request receives a correlation ID that can be included in logs to help trace related operations.

### Logging

Winston provides configurable application logging and transports.

### Security middleware

- **Helmet:** adds security-related HTTP response headers.
- **CORS:** configures which browser origins can access the API.
- **Express Rate Limit:** restricts repeated requests within a configured time window.

Review the allowed origins, rate limits, and proxy settings before deployment.

## Example Endpoint

The starter contains a sample endpoint:

```http
GET /api/v1/users
```

Example response:

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Alice"
    },
    {
      "id": 2,
      "name": "Bob"
    }
  ]
}
```

The sample users are stored in memory. This endpoint demonstrates the layered architecture; it does not provide persistent database storage.

## Adapting the Template

When starting a new project:

1. Update the project name in `package.json`.
2. Configure environment variables.
3. Set the correct CORS origins and rate limits.
4. Replace sample routes and in-memory data with your application's features.
5. Add a database and ORM if needed.
6. Implement authentication and authorization if required.
7. Add automated tests and API documentation when ready.
8. Update this README to describe the actual application.

Add abstractions only when they provide a clear benefit. Avoid creating unnecessary folders or complexity.

## Security Notes

- Never commit `.env` or other secret files.
- Keep dependencies updated and review `npm audit` findings.
- Configure CORS for intended frontend origins.
- Set appropriate rate limits for your endpoints.
- Configure trusted proxies correctly when deployed behind a reverse proxy.
- Implement authentication and authorization for protected resources.
- Use HTTPS in production.

Security middleware provides useful defaults, but it does not automatically make an application fully secure.

## License

No license has been selected yet. Add a `LICENSE` file before publishing and update this section with the chosen license.

## Contributing

Before submitting changes, verify that the application builds and that the checks currently configured in `package.json` pass.
