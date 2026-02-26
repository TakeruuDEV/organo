import { useState } from 'react';
import Banner from './components/Banner/Banner.jsx';
import Form from './components/Form/Form.jsx';
import Team from './components/Team/Team.jsx';

function App() {

  const teams = [
    {
      name: "Back-end",
      mainColor: "#57C278",
      SecondColor: "#D9F7E9"
    },
    {
      name: "Front-end",
      mainColor: "#82CFFA",
      SecondColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      mainColor: "#A6D157",
      SecondColor: "#F0F8E2"
    },
    {
      name: "DevOps",
      mainColor: "#E06B69",
      SecondColor: "#FDE7E8"
    },
    {
      name: "UX e Design",
      mainColor: "#DB6EBF",
      SecondColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      mainColor: "#FFBA05",
      SecondColor: "#FFF5D9"
    },
    {
      name: "Inova e Gestão",
      mainColor: "#FF8A29",
      SecondColor: "#FFEEDF"
    }
    ]

  const [colaborators, setColaborator] = useState([])

  const onNewColaboratorAdded = (colaborator) => {
    console.log(colaborator);
    setColaborator([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form 
        teams={teams}
        onColaboratorRegistred={colaborator => onNewColaboratorAdded(colaborator)}
      />
      {teams.map(team => <Team 
          key={team.name}
          nameTeam={team.name}
          mainColor={team.mainColor}
          secondColor={team.SecondColor}
          colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
        />)}
      


    </div>
  );
}

export default App;