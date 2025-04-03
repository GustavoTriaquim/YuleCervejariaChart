import Header from "./Components/Header/Header";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 200px 10% 100px 10%;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

const ChartContainer = styled.div`
  width: 90%;
  height: 100%;
  background-color: #ffffff;
  border: 5px solid #f3c037;
  padding: 20px;
`;

const Content = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #f3c037;
  padding: 5px;
  background-color: #ffffff;
`;

const Text = styled.h1`
  color: #0c0c0c;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
`;

const data = [
  { month: 'JAN', bagaco: 10, couro: 5, residuos: 5 },
  { month: 'FEV', bagaco: 20, couro: 10, residuos: 10 },
  { month: 'MAR', bagaco: 25, couro: 15, residuos: 10 },
  { month: 'ABR', bagaco: 30, couro: 20, residuos: 10 },
];

function App() {
  return (
    <>
      <Header />
      <Main>
        <ChartContainer>
          <ResponsiveContainer width="100%" height="100%" >
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }} >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Kg ou m²', angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bagaco" stroke="#27aa3f" name="Produção de Bagaço" />
              <Line type="monotone" dataKey="couro" stroke="#2760aa" name="Produção de Couro" />
              <Line type="monotone" dataKey="residuos" stroke="#aa278e" name="Resíduos Descartados" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <Content>
          <Text >EFICIÊNCIA: 00%</Text>
        </Content>
      </Main>
    </>
  );
}

export default App;
