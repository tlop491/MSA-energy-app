import { Grid, Paper } from '@material-ui/core/';
import * as React from 'react';
// import './App.css';

import FormRT from "./FormRT";
import RTData from "./RTData";


import Titles from "./Titles";

const style = {
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 500}
}


class RTime extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  
    this.state = {
        error: undefined,
        generation: undefined,
        generation1: undefined,
        generation2: undefined,
        generation3: undefined,
        generation4: undefined,

        interval: undefined,
        interval1: undefined,
        interval2: undefined,
        interval3: undefined,
        interval4: undefined,
        load: undefined,
        load1: undefined,
        load2: undefined,
        load3: undefined,
        load4: undefined,


        pnode: undefined,
        pnode1: undefined,
        pnode2: undefined,
        pnode3: undefined,
        pnode4: undefined,

        price: undefined,
        price1: undefined,
        price2: undefined,
        price3: undefined,
        price4: undefined,
       
        
        

    };
  }


  public getRT = async (e:any) => {
    e.preventDefault();
    const apiCall = await fetch(`https://emi.azure-api.net/rtp/`, {
      method: 'GET',
      // tslint:disable-next-line:object-literal-sort-keys
      headers: {
        // tslint:disable-next-line:object-literal-sort-keys
        'Ocp-Apim-Subscription-Key':'802389f1e6964b63a943e3af28de9252',        
      }
    }  
    );
   const data = await apiCall.json();
  
      // tslint:disable-next-line:no-console
    console.log(data);
    this.setState({
        error: "",
        generation: data[0].generation,
        generation1: data[1].generation,
        generation2: data[2].generation,
        generation3: data[3].generation,
        generation4: data[4].generation,

        interval: data[0].interval,
        interval1: data[1].interval,
        interval2: data[2].interval,
        interval3: data[3].interval,
        interval4: data[4].interval,

        load: data[0].load,
        load1: data[1].load,
        load2: data[2].load,
        load3: data[3].load,
        load4: data[4].load,
        
        pnode:  data[0].pnode,
        pnode1:  data[1].pnode,
        pnode2:  data[2].pnode,
        pnode3:  data[3].pnode,
        pnode4:  data[4].pnode,

        price: data[0].price,
        price1: data[1].price,
        price2: data[2].price,
        price3: data[3].price,
        price4: data[4].price,



    });
 

  }

 public render() {
    return (

      <div>
        <div className="wrapper">
          <div >
            <div >
              <div >
                <div >

                <Titles />
                </div>
                <Grid container={true}>
                    {/* <Grid item={true} sm={true}>
                        <Paper  style={style.Paper}  square={true}>
                            <div >
                            <FormRT getRT={this.getRT} />
                            </div>
                        </Paper>
                    </Grid> */}
                    <Grid item={true} sm={true}>
                        <Paper  style={style.Paper}  square={true}>
                            <div>
                            <FormRT getRT={this.getRT} />
                                <RTData
                                error={this.state.error}
                                generation={this.state.generation}
                                generation1={this.state.generation1}
                                generation2={this.state.generation2}
                                generation3={this.state.generation3}
                                generation4={this.state.generation4}
                                interval={this.state.interval}
                                interval1={this.state.interval1}
                                interval2={this.state.interval2}
                                interval3={this.state.interval3}
                                interval4={this.state.interval4}

                                load={this.state.load}
                                load1={this.state.load1}
                                load2={this.state.load2}
                                load3={this.state.load3}
                                load4={this.state.load4}

                                pnode={this.state.pnode}
                                pnode1={this.state.pnode1}
                                pnode2={this.state.pnode2}
                                pnode3={this.state.pnode3}
                                pnode4={this.state.pnode4}

                                price={this.state.price}
                                price1={this.state.price1}
                                price2={this.state.price2}
                                price3={this.state.price3}
                                price4={this.state.price4}

                                />
                            </div>
                        </Paper>
                     </Grid>
               </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default RTime; 


