import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Dentist List</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
