import { useState } from 'react';
import Banner from './components/Banner/Banner.jsx';
import Form from './components/Form/Form.jsx';
import Team from './components/Team/Team.jsx';
import FormTeam from './components/FormTeam/FormTeam.jsx';
import './App.css'

function App() {

  const [teams, setTeam] = useState([
    {
      name: "Back-end",
      mainColor: "#57C278",
      secondColor: "#D9F7E9"
    },
    {
      name: "Front-end",
      mainColor: "#82CFFA",
      secondColor: "#E8F8FF"
    },
    {
      name: "Data Science",
      mainColor: "#A6D157",
      secondColor: "#F0F8E2"
    },
    {
      name: "DevOps",
      mainColor: "#E06B69",
      secondColor: "#FDE7E8"
    },
    {
      name: "UX e Design",
      mainColor: "#DB6EBF",
      secondColor: "#FAE9F5"
    },
    {
      name: "Mobile",
      mainColor: "#FFBA05",
      secondColor: "#FFF5D9"
    },
    {
      name: "Inova e Gestão",
      mainColor: "#FF8A29",
      secondColor: "#FFEEDF"
    }
  ])

  const [colaborators, setColaborator] = useState([])

  const newTeamAdded = (team) => {
    console.log(team);
    setTeam(prev => [...prev, team])

  }

  const onNewColaboratorAdded = (colaborator) => {
    console.log(colaborator);
    setColaborator([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <div className="forms-container">
        <Form
          teams={teams}
          onColaboratorRegistred={colaborator => onNewColaboratorAdded(colaborator)}
        />

        <FormTeam newTeamAdded={team => newTeamAdded(team)} />
      </div>


      {teams.map(team => <Team
        key={team.name}
        nameTeam={team.name}
        mainColor={team.mainColor}
        secondColor={team.secondColor}
        colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
      />)}



    </div>
  );
}

export default App;