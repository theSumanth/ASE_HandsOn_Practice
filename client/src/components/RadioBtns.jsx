const RadioBtns = ({ onChangePlan, choosedPlan }) => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center justify-center gap-1">
        <input
          type="radio"
          name="plan"
          value="prepaid"
          id="prepaid"
          checked={choosedPlan == "prepaid"}
          onChange={() => onChangePlan("prepaid")}
        />
        <label htmlFor="prepaid">Prepaid</label>
      </div>
      <div className="flex items-center justify-center gap-1">
        <input
          type="radio"
          name="plan"
          value="postpaid"
          id="postpaid"
          checked={choosedPlan == "postpaid"}
          onChange={() => onChangePlan("postpaid")}
        />
        <label htmlFor="postpaid">Postpaid</label>
      </div>
    </div>
  );
};

export default RadioBtns;
