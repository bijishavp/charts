// App.js
import React from 'react';
import CombinedChart from './component/CombinedChart';


const App = () => {
 
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Bar Chart',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Line Chart',
        data: [5, 8, 2, 9, 3],
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className='app'>
        <CombinedChart barData={barChartData} lineData={lineChartData} />
      </div>
    </>
  );
};

export default App;
