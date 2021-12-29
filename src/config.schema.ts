import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  STAGE: Joi.string().required(),
  HOST: Joi.string().required(),
  PORT: Joi.number().required(),
  HOST_PG: Joi.string().required(),
  PORT_PG: Joi.number().required(),
  USER_PG: Joi.string().required(),
  PWD_PG: Joi.string().required(),
  DB_PG: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES: Joi.number().required(),
});
