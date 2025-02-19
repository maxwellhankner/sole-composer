# Sole Composer

A 3D shoe design application that allows users to create and customize their own shoe designs in a web browser.

## Features

- Interactive 3D shoe design interface
- Real-time color and pattern customization
- Layer-based design system
- Custom graphics support
- User authentication with Google OAuth
- Design saving and sharing capabilities
- Responsive web interface

## Tech Stack

### Frontend
- React 18
- Three.js with React Three Fiber for 3D rendering
- Styled Components for styling
- React Router for navigation
- React Color for color picking
- React Alice Carousel for image galleries

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- AWS SDK for file storage
- Passport.js for authentication
- Multer for file uploads

## Prerequisites

- Node.js (v16.20.2)
- npm (v8.0.0 or higher)
- MongoDB
- AWS Account (for file storage)

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/maxwellhankner/sole-composer.git
cd sole-composer
```

2. Install dependencies:
```bash
npm run setup
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
```

## Development

Run the development server (both frontend and backend):
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:8000
- Frontend development server on http://localhost:3000

To run only the backend:
```bash
npm run dev:server
```

To run only the frontend:
```bash
npm run dev:client
```

## Production

1. Build the frontend:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
sole-composer/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── App/          # Main App component
│       ├── components/   # React components
│       ├── containers/   # Page containers
│       └── utils/        # Utility functions
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── middleware/   # Express middleware
    │   ├── models/      # Mongoose models
    │   └── routes/      # Express routes
    └── index.js         # Server entry point
```

## License

ISC License

## Author

Maxwell Hankner
