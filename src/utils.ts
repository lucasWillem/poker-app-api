const { randomBytes } = require('crypto');

const generateSecureRandomString = (length: number): string => {
    return randomBytes(length).toString('hex');
  }
  