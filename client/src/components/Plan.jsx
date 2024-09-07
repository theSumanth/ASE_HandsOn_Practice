import { Th, Td } from "./UI";
import useFetchPlans from "../hooks/useFetchPlans";

const Plan = ({ choosedPlan }) => {
  const { fetchedPlans, isLoading, isError } = useFetchPlans(choosedPlan);

  if (isLoading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <table className="flex flex-col items-center w-[60%] border-2 border-gray-500 rounded-md">
      <thead className="w-full">
        <tr className="flex items-center justify-evenly">
          <Th>Recharge Plan</Th>
          <Th>Data</Th>
          <Th>Plan Type</Th>
          <Th>Validity</Th>
        </tr>
      </thead>
      <tbody className="w-full">
        {fetchedPlans.map((plan) => {
          return (
            <tr key={plan._id} className="flex items-center justify-evenly">
              <Td>{plan.price} Rs.</Td>
              <Td>{plan.data}GB/Day</Td>
              <Td>{plan.planType.toUpperCase()}</Td>
              <Td>{plan.validity} Days</Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Plan;
