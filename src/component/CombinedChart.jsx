import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './CombinedChart.css'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';

Chart.register(CategoryScale);
const CombinedChart = ({ barData, lineData }) => {

    
    const containerStyle = {
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        
    };

    const titleStyle = {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign:'center'
    };

    const columnStyle = {
        marginBottom: '20px',
    };

    const optionsWithHighlight = {
        scales: {
          x: {
            ticks: {
              callback: (value) => {
                // Highlight specific labels
                if (value === 'LabelToHighlight') {
                  return {
                    color: 'red', // Highlighted label color
                  };
                }
                return value;
              },
            },
          },
          y: {
            // Add options for the y-axis if needed
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
            intersect: false,
          },
        },
        animation: {
          duration: 1000,
        },
      };
      

    return (
        <>
            <div style={containerStyle}>
                <h1 style={titleStyle}>Visualization Data Chart</h1>
                <Row className='row'>
                    <Col xs={6} md={4} style={columnStyle} className='column'>
                    <Bar data={barData} options={optionsWithHighlight} />
                    </Col>
                   
                    <Col xs={6} md={4} style={columnStyle} className='column'>
                        <Line data={lineData} options={optionsWithHighlight} />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default CombinedChart;
