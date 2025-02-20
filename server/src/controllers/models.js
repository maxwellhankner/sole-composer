const axios = require('axios');

// Get model
// GET /api/models/af1
exports.getModel = async (req, res, next) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://sole-composer-design-assets.s3.us-east-2.amazonaws.com/${req.params.id}`,
      responseType: 'stream'
    });
    response.data.pipe(res);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
