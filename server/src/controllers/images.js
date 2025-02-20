const axios = require('axios');
const upload = require('../middleware/uploadImage');
const singleUpload = upload.single('image');

// Get Image
// GET /api/assets/images/:id
exports.getImage = async (req, res, next) => {
  try {
    const imageUrl = `https://sole-composer-user-assets.s3.us-east-2.amazonaws.com/${req.params.id}`;
    
    const response = await axios({
      method: 'get',
      url: imageUrl,
      responseType: 'stream',
      validateStatus: false
    });

    if (response.status !== 200) {
      return res.status(response.status).json({ error: 'Failed to fetch image' });
    }

    response.data.on('error', (error) => {
      console.error('S3 Stream Error:', error);
      return res.status(500).json({ error: error.message });
    });

    response.data.pipe(res);
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
    const imageUrl = `https://sole-composer-design-assets.s3.us-east-2.amazonaws.com/${req.params.id}`;
    
    const response = await axios({
      method: 'get',
      url: imageUrl,
      responseType: 'stream',
      validateStatus: false
    });

    if (response.status !== 200) {
      return res.status(response.status).json({ error: 'Failed to fetch design image' });
    }

    response.data.on('error', (error) => {
      console.error('S3 Design Stream Error:', error);
      return res.status(500).json({ error: error.message });
    });

    response.data.pipe(res);
  } catch (error) {
    console.error('Design Controller Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
