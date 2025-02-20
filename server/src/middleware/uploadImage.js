const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configure AWS
const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET,
  },
  region: 'us-east-2'
});

console.log('AWS Config:', {
  hasSecretKey: !!process.env.S3_ACCESS_SECRET,
  hasAccessKey: !!process.env.S3_ACCESS_KEY,
  region: 'us-east-2'
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3: s3Client,
    bucket: 'sole-composer-user-assets',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: function (req, file, cb) {
      // If new image, generate file name
      if (file.originalname === 'newImage') {
        const ext = file.mimetype === 'image/png' ? '.png' : '.jpg';
        cb(null, `${Date.now().toString()}${ext}`);
      }
      // Else, update existing file
      else {
        cb(null, file.originalname);
      }
    },
  }),
});

module.exports = upload;
