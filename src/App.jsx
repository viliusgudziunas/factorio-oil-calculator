import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Variable from './components/Variable';
import Results from './components/Results';

function App() {
  const [oilRefineries, setOilRefineries] = useState(0);
  const [lubricantPlants, setLubricantPlants] = useState(0);
  const [heavyOilCrackingPlants, setHeavyOilCrackingPlants] = useState(0);
  const [lightOilCrackingPlants, setLightOilCrackingPlants] = useState(0);

  const [heavyOil, setHeavyOil] = useState(0);
  const [lightOil, setLightOil] = useState(0);
  const [petroleumGas, setPetroleumGas] = useState(0);
  const [lubricant, setLubricant] = useState(0);

  const increase = type => {
    switch (type) {
      case 'Oil Refineries':
        setOilRefineries(oilRefineries + 1);
        break;
      case 'Lubricant Plants':
        setLubricantPlants(lubricantPlants + 1);
        break;
      case 'Heavy Oil Cracking Plants':
        setHeavyOilCrackingPlants(heavyOilCrackingPlants + 1);
        break;
      case 'Light Oil Cracking Plants':
        setLightOilCrackingPlants(lightOilCrackingPlants + 1);
        break;
      default:
        break;
    }
  };

  const decrease = type => {
    switch (type) {
      case 'Oil Refineries':
        if (oilRefineries !== 0) {
          setOilRefineries(oilRefineries - 1);
        }
        break;
      case 'Lubricant Plants':
        if (lubricantPlants !== 0) {
          setLubricantPlants(lubricantPlants - 1);
        }
        break;
      case 'Heavy Oil Cracking Plants':
        if (heavyOilCrackingPlants !== 0) {
          setHeavyOilCrackingPlants(heavyOilCrackingPlants - 1);
        }
        break;
      case 'Light Oil Cracking Plants':
        if (lightOilCrackingPlants !== 0) {
          setLightOilCrackingPlants(lightOilCrackingPlants - 1);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setHeavyOil(
      oilRefineries * 5 - lubricantPlants * 10 - heavyOilCrackingPlants * 20
    );
    setLightOil(
      oilRefineries * 9 +
        heavyOilCrackingPlants * 15 -
        lightOilCrackingPlants * 15
    );
    setPetroleumGas(oilRefineries * 11 + lightOilCrackingPlants * 10);
    setLubricant(lubricantPlants * 10);
  }, [
    oilRefineries,
    lubricantPlants,
    heavyOilCrackingPlants,
    lightOilCrackingPlants
  ]);

  return (
    <Container className="app">
      <Header />
      <Row className="content">
        <Col>
          Variables
          <hr />
          <Variable
            name="Oil Refineries"
            value={oilRefineries}
            increase={increase}
            decrease={decrease}
          />
          <Variable
            name="Lubricant Plants"
            value={lubricantPlants}
            increase={increase}
            decrease={decrease}
          />
          <Variable
            name="Heavy Oil Cracking Plants"
            value={heavyOilCrackingPlants}
            increase={increase}
            decrease={decrease}
          />
          <Variable
            name="Light Oil Cracking Plants"
            value={lightOilCrackingPlants}
            increase={increase}
            decrease={decrease}
          />
        </Col>
        <Results
          heavyOil={heavyOil}
          lightOil={lightOil}
          petroleumGas={petroleumGas}
          lubricant={lubricant}
        />
      </Row>
    </Container>
  );
}

export default App;
