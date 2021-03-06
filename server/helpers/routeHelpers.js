const Joi = require("joi");

module.exports = {
  // validateParam: (schema, name) => {
  //   return (req, res, next) => {
  //     const result = Joi.validate({ param: req.params[name] }, schema);
  //     if (result.error) {
  //       res.status(400).json(result.error);
  //     } else {
  //       if (!req.value) req.value = {};
  //       if (!req.value.params) req.value.params = {};
  //
  //       req.value.params[name] = result.value.param;
  //       next();
  //     }
  //   };
  // },

  validateBody: schema => {
    return (req, res, next) => {
      var result = Joi.validate(req.body, schema);
      if (result.error) {
        res.status(400).json(result.error);
      } else {
        if (!req.value) req.value = {};
        if (!req.value.body) req.value.body = result.value;

        next();
      }
    };
  },

  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    })
  }
};
