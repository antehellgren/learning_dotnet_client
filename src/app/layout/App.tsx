import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('http://localhost:23956/api/activities').then(response => {
      setActivities(response.data);
    })

  }, [])
  

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <header className="App-header">
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
      </header>
    </div>
  );
}

export default App;