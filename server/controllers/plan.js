const Plan = require("../models/plan");

exports.getPrepaidPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find({ planType: "prepaid" });
    if (plans.length <= 0) {
      return res
        .status(500)
        .json({ message: "No prepaid plans are available" });
    }
    return res
      .status(200)
      .json({ message: "Succesfully fetched prepaid plans", plans: plans });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getPostpaidPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find({ planType: "postpaid" });
    if (plans.length <= 0) {
      return res
        .status(500)
        .json({ message: "No postpaid plans are available" });
    }
    return res
      .status(200)
      .json({ message: "Succesfully fetched postpaid plans", plans: plans });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
