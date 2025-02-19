# Sole Composer Project Context

## Project Overview
A web application for designing custom shoes with a 3D interface.

## Tech Stack
- Frontend: React (v18.2.0)
  - 3D Rendering: Three.js (@react-three/fiber, @react-three/drei)
  - Styling: styled-components
  - Routing: react-router-dom
  - UI Components: react-color, react-alice-carousel
  - Error Tracking: Sentry

- Backend: Node.js/Express
  - Database: MongoDB (mongoose)
  - Authentication: Google OAuth
  - File Storage: AWS S3
  - Session Management: cookie-session, express-session

## Key Components
- /client/src/components/
  - DesignerContainer/: Main 3D design interface
  - Interface/: UI controls and menus
  - Scene/: 3D scene setup and rendering
  - designerui/: Design-specific UI components
  - landingui/: Landing page components

## Core Features
- 3D shoe visualization
- Color customization
- Layer management
- Design saving/loading
- User authentication
- File upload/storage

## Development Commands
- `npm run dev`: Start both client and server in development mode
- `npm run server`: Start server only
- `npm run client`: Start client only
- `npm run build`: Build client for production

## Project Structure
- /client/: React frontend application
- /server/: Express backend server
  - /controllers/: Route handlers
  - /models/: Database schemas
  - /routes/: API endpoints
  - /middleware/: Custom middleware
  - /db/: Database configuration

## Common Files
- package.json: Project dependencies and scripts
- client/package.json: Frontend dependencies
- server/index.js: Server entry point
- client/src/index.js: Frontend entry point
