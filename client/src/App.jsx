import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Plan from "./components/Plan";
import RadioBtns from "./components/RadioBtns";

function App() {
  const [choosedPlan, setChoosedPlan] = useState("prepaid");

  console.log(choosedPlan);
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <Header />
      <RadioBtns onChangePlan={setChoosedPlan} choosedPlan={choosedPlan} />
      <Plan choosedPlan={choosedPlan} />
    </div>
  );
}

export default App;
