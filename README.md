# Sole Composer

A web-based 3D shoe design application where users can create and customize their own shoes.

## Features

- 3D shoe design interface
- Color and pattern customization
- Custom graphics upload
- Google login
- Save and share designs

## Tech Stack

- Frontend: React, Three.js, React Three Fiber
- Backend: Node.js, Express, MongoDB
- Storage: AWS S3

## Setup

1. Clone the repository:
```bash
git clone https://github.com/maxwellhankner/sole-composer.git
cd sole-composer
```

2. Install dependencies:
```bash
npm run setup
```

3. Create `.env` file:
```
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
```

## Development

Start both frontend and backend:
```bash
npm run dev
```

Frontend only (http://localhost:3000):
```bash
npm run dev:client
```

Backend only (http://localhost:8000):
```bash
npm run dev:server
```

## Production

```bash
npm run build
npm start
```

## Author

Maxwell Hankner

## License

ISC License
