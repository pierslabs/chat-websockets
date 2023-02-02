const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (file) => {
  return file.split('.').shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExtension = removeExtension(file);

  const skipIndex = ['index'].includes(fileWithOutExtension);

  if (!skipIndex) {
    return router.use(
      `/${fileWithOutExtension}`,
      require(`./${fileWithOutExtension}`)
    );
  }
});

router.get('*', (req, res) => res.status(400).json({ error: 'Not found' }));

module.exports = router;
