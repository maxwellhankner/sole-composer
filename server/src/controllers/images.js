const request = require('request');

const upload = require('../middleware/uploadImage');
const singleUpload = upload.single('image');

// Get Image
// GET /api/assets/images/:id
exports.getImage = async (req, res, next) => {
  try {
    console.log('Fetching image:', req.params.id);
    const imageUrl = `https://sole-composer-user-assets.s3.us-east-2.amazonaws.com/${req.params.id}`;
    console.log('Image URL:', imageUrl);
    
    request
      .get(imageUrl)
      .on('error', (error) => {
        console.error('S3 Request Error:', error);
        return res.status(500).json({ error: error.message });
      })
      .on('response', (response) => {
        console.log('S3 Response Status:', response.statusCode);
        if (response.statusCode !== 200) {
          return res.status(response.statusCode).json({ error: 'Failed to fetch image' });
        }
      })
      .pipe(res);
  } catch (error) {
    console.error('Controller Error:', error);
    return res.status(500).json({ error: error.message });
  }
};

// Post Image
// POST /api/assets/uploadimage/
exports.uploadImage = (req, res, next) => {
  try {
    singleUpload(req, res, function (error) {
      if (error) {
        throw error;
      }
      const image = req.file.location;
      return res.status(200).json({ image: image });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get Design Image
// GET /api/assets/designimages/:id
exports.getDesignImage = async (req, res, next) => {
  try {
    console.log('Fetching design image:', req.params.id);
    const imageUrl = `https://sole-composer-design-assets.s3.us-east-2.amazonaws.com/${req.params.id}`;
    console.log('Design Image URL:', imageUrl);
    
    request
      .get(imageUrl)
      .on('error', (error) => {
        console.error('S3 Design Request Error:', error);
        return res.status(500).json({ error: error.message });
      })
      .on('response', (response) => {
        console.log('S3 Design Response Status:', response.statusCode);
        if (response.statusCode !== 200) {
          return res.status(response.statusCode).json({ error: 'Failed to fetch design image' });
        }
      })
      .pipe(res);
  } catch (error) {
    console.error('Design Controller Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
