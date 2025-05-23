import Header from "./Components/Header/Header";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { db } from './firebaseConfig';
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';

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

function App() {
  const [data, setData] = useState([]);
  const [eficienciaAtual, setEficienciaAtual] = useState("00");

  useEffect(() => {
    const fetchGraficoData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'grafico'));
        const graficoData = [];

        let somaEficiencia = 0;
        let mesesComEficiencia = 0;

        for (const docSnap of snapshot.docs) {
          const docData = docSnap.data();
          const id = docSnap.id;
          const mes = id.split('_')[1];

          const bagaco = docData.bagasse_production || 0;
          const couro = docData.leather_production || 0;
          const residuos = docData.residuos || 0;
          const eficiencia = docData.eficiencia || 0;

          graficoData.push({
            month: mes.toUpperCase(),
            bagaco,
            couro,
            residuos,
            eficiencia,
          });

          if (!Number.isNaN(eficiencia)) {
            somaEficiencia += eficiencia;
            mesesComEficiencia++;
          }
        }

        const mesesOrdem = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
        graficoData.sort((a, b) => {
          return mesesOrdem.indexOf(a.month.toLowerCase()) - mesesOrdem.indexOf(b.month.toLowerCase());
        });

        setData(graficoData);

        if (mesesComEficiencia > 0) {
          const mediaEficiencia = (somaEficiencia / mesesComEficiencia).toFixed(2);
          setEficienciaAtual(mediaEficiencia);
        } else {
          setEficienciaAtual("00");
        }

      } catch (error) {
        console.error("Erro ao buscar dados do grafico.", error);
      }
    };

    fetchGraficoData();
  }, []);


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
          <Text>EFICIÊNCIA: {eficienciaAtual}%</Text>
        </Content>
      </Main>
    </>
  );
}

export default App;
