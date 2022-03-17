const Joi = require("joi");

const validateOutage = (outage) => {
  try {
    const schema = Joi.object({
      DistrictId: Joi.number().integer().min(1).max(25),
    });

    return schema.validate(outage);
  } catch (error) {
    console.log("Error!");
  }
};

const validateDates = (dates) => {
  try {
    const schema = Joi.object({
      StartDate: Joi.date()
        .min("01-03-2022")
        .max(Joi.ref("EndDate"))
        .required(),
      EndDate: Joi.date().required(),
    });

    return schema.validate(dates);
  } catch (error) {
    console.log("Error!");
  }
};

module.exports = { validateOutage, validateDates };
