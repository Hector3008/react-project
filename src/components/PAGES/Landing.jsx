import React from 'react'
import Presentacion from '../SECTION/Presentacion/Presentacion'
import Curiers from '../SECTION/Curiers/Curiers'
import DashboardContainer from '../SECTION/Dashboards/dashboardContainer'
import { getElements } from '../../services/utils'

const Landing = () => {
  
  const items = getElements()
  return (
    <>
      <Presentacion />
      <Curiers />
      <DashboardContainer items={items}/>
    </>
  );
}

export default Landing