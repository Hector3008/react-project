import React from 'react'
import Presentacion from '../SECTION/Presentacion/Presentacion'
import Curiers from '../SECTION/Curiers/Curiers'
import DashboardContainer from '../SECTION/Dashboards/dashboardContainer'
import { getElements, getStarterComponents } from '../../services/utils'

const Landing = () => {
  
  const items = getElements()
  const starterComponents = getStarterComponents()
  console.log("starterComponents: ", starterComponents);
  
  return (
    <>
      <Presentacion />
      <Curiers />
      <DashboardContainer items={items} components={starterComponents} title={"ARRANCADORES Y COMPONENTES"}/>
    </>
  );
}

export default Landing