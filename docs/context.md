# Sole Composer - Project Context

## Project Overview
Sole Composer is a 3D shoe design application that enables users to create and customize their own shoe designs through an interactive web interface. The application provides real-time 3D visualization and customization options for different parts of the shoe.

## Tech Stack
- Frontend: React
- Backend: Node.js (v20.11.1)/Express
- Database: MongoDB (Mongoose v8.1.3)
- Storage: AWS S3
- Authentication: Passport.js with Google OAuth
- File Handling: Multer/Multer-S3

## Core Architecture
### Frontend (`/client`)
- React-based 3D shoe designer
- Three.js for 3D rendering
- User interface for customization
- Design save/load functionality

### Backend (`/server`)
- Express server handling:
  - User authentication via Google OAuth
  - Design storage/retrieval with MongoDB
  - File uploads to AWS S3
  - Session management with express-session

## Key Features
- Interactive 3D shoe visualization
- Real-time design customization
- User authentication with Google
- Design saving and loading
- Image/texture upload capabilities
- Design sharing functionality

## Important Directories
- `/client`: React frontend code
- `/server`: Node.js backend code
- `/docs`: Project documentation
- `/public`: Static assets
- `/src`: Source code

## Environment Variables
Required environment variables:

# MongoDB
MONGODB_URI=

# AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Session
SESSION_SECRET=

## Development Commands
- `npm run dev` - Start development environment (concurrent server & client)
- `npm run dev:server` - Start backend with nodemon
- `npm run dev:client` - Start React development server
- `npm run build` - Build production frontend
- `npm run start` - Start production server
- `npm run fresh` - Clean install all dependencies
- `npm run preview` - Preview production build locally

## Deployment
- Platform: AWS
- Node.js Version: 20.11.1
- NPM Version: >=10.2.4

## Current Status
Last Updated: February 2024
- Successfully redeployed to AWS
- Dependencies updated to latest versions
- Core functionality maintained

## Recent Updates
- Updated Node.js to v20.11.1
- Updated key dependencies:
  - @aws-sdk/client-s3: ^3.515.0
  - mongoose: ^8.1.3
  - passport: ^0.7.0
  - express-session: ^1.18.0

## Next Steps
[ ] Review and update frontend dependencies
[ ] Test all core features after dependency updates
[ ] Review and update AWS configuration
[ ] Update documentation for new features