import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EnergyConsumptionList } from "./energyConsumption/EnergyConsumptionList";
import { EnergyConsumptionCreate } from "./energyConsumption/EnergyConsumptionCreate";
import { EnergyConsumptionEdit } from "./energyConsumption/EnergyConsumptionEdit";
import { EnergyConsumptionShow } from "./energyConsumption/EnergyConsumptionShow";
import { BuildingList } from "./building/BuildingList";
import { BuildingCreate } from "./building/BuildingCreate";
import { BuildingEdit } from "./building/BuildingEdit";
import { BuildingShow } from "./building/BuildingShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { HvacSystemList } from "./hvacSystem/HvacSystemList";
import { HvacSystemCreate } from "./hvacSystem/HvacSystemCreate";
import { HvacSystemEdit } from "./hvacSystem/HvacSystemEdit";
import { HvacSystemShow } from "./hvacSystem/HvacSystemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EcoPilot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EnergyConsumption"
          list={EnergyConsumptionList}
          edit={EnergyConsumptionEdit}
          create={EnergyConsumptionCreate}
          show={EnergyConsumptionShow}
        />
        <Resource
          name="Building"
          list={BuildingList}
          edit={BuildingEdit}
          create={BuildingCreate}
          show={BuildingShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
        <Resource
          name="HvacSystem"
          list={HvacSystemList}
          edit={HvacSystemEdit}
          create={HvacSystemCreate}
          show={HvacSystemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;