# Sole Composer

## Overview
Sole Composer is a web-based 3D shoe design application that lets users create and customize their own shoe designs in real-time.

## Tech Stack
- Frontend: React with Three.js for 3D rendering
- UI: Tailwind CSS and shadcn/ui components
- Backend: Node.js/Express
- Database: MongoDB
- Cloud Storage: AWS S3
- Authentication: Google OAuth

## Project Structure
- `/client` - React frontend application
- `/server` - Express backend server
- `/docs` - Project documentation

## Environment Setup
Required environment variables:
```
MONGODB_URI=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SESSION_SECRET=
```

## Development
Main commands:
- `npm run dev` - Start development environment
- `npm run build` - Build for production
- `npm run start` - Run production server
- `npm run preview` - Preview production build locally
- `npm run fresh` - Clean install dependencies

## System Requirements
- Node.js: 20.11.1
- NPM: >=10.2.4

## Key Features
- Interactive 3D shoe designer
- Real-time customization
- Google authentication
- Design saving and sharing
- Custom texture upload support

## Next Steps
Phase 1: Modernization
[ ] Refactor codebase to follow current best practices
[ ] Update all dependencies to latest stable versions
[ ] Implement modern React patterns (hooks, context, etc.)
[ ] Improve code organization and structure

Phase 2: UI/UX Overhaul
[ ] Redesign main interface with modern aesthetics
[ ] Enhance user experience and interaction flows
[ ] Implement responsive design improvements
[ ] Create consistent design system
[ ] Optimize 3D rendering performance

Phase 3: Core Features
[ ] Set up authentication system with Google OAuth
[ ] Implement user profiles and accounts
[ ] Add design gallery and sharing features
[ ] Enhance customization options
[ ] Improve texture and material handling