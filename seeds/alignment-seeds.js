const Alignment = require('../models/Alignment');

const alignmentData = [
  {
    alignment_type: 'hero',
  },
  {
    alignment_type: 'villain',
  }
];

const seedAlignment = () => Alignment.bulkCreate(alignmentData);

module.exports = seedAlignment;