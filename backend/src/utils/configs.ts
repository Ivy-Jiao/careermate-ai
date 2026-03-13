require('dotenv').config();

const requiredConfigs = {
    MONGODB_UR: process.env.MONGODB_URI,
};

const optionalConfigs = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'dev',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',

};

for (const key in requiredConfigs) {
    if (requiredConfigs[key as keyof typeof requiredConfigs] == null) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
};

module.exports = {
    ...optionalConfigs,
    ...requiredConfigs
};