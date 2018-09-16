import * as React from 'react';
// import './App.css';
import Icp from "./components/Icp";
import RTime from "./components/RTime";



class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    };

public render() {
    return (

      <div>

      <Icp />
      <RTime />
      </div>

    );
  }
};

export default App; 


