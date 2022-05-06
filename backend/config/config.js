import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
//   NODE_ENV,
  PORT,
//   DB_HOST,
//   DB_PORT,
//   DB_DATABASE,
//   SECRET_KEY, 
//   LOG_FORMAT,
//   LOG_DIR,
//   ORIGIN,
//   DB_USERNAME,
//   DB_PASSWORD,
//   TWILIO_ACCOUNT_SID,
//   TWILIO_AUTH_TOKEN,
//   serviceID,
//   JWT_SECRET,
//   JWT_COOKIE_EXPIRES_IN,
//   ATLAS_HOST,
//   ATLAS_USERNAME,
//   ATLAS_PASSWORD,
//   ATLAS_DB,
//   EMAIL_HOST,
//   EMAIL_PASS,
} = process.env;

export const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
