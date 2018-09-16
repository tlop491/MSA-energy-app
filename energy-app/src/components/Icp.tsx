import { Grid, Paper } from '@material-ui/core/';
import * as React from 'react';
// import './App.css';
import Energy from "./Energy";
import Form from "./Form";


import Titles from "./Titles";

// const API_KEY =  "34c61605f8464b1083606f89c02b1c25";
// const ICP = "	0000138208UNEB5"
const style = {
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 500}
}


class Icp extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  
    this.state = {
      addressNumber: undefined,
      addressStreet: undefined,
      addressSuburb: undefined,
      error: undefined,
      icpIdentifier: undefined,
      icpStatus: undefined,

    };
  }


  public getIcp = async (e:any) => {
    e.preventDefault();
    const addressUnit = e.target.elements.addressUnit.value;
    const addressStreet = e.target.elements.addressStreet.value; 
    const addressSuburb = e.target.elements.addressSuburb.value;
    const addressRegion = e.target.elements.addressRegion.value;
    const apiCall = await fetch(`https://emi.azure-api.net/ICPConnectionData/search/?unitOrNumber=${addressUnit}&streetOrPropertyName=${addressStreet}&suburbOrTown=${addressSuburb}&region=${addressRegion}`, {
      method: 'GET',
      // tslint:disable-next-line:object-literal-sort-keys
      headers: {
        // tslint:disable-next-line:object-literal-sort-keys
        'Ocp-Apim-Subscription-Key':'34c61605f8464b1083606f89c02b1c25',        
      }
    }  
    );
   const data = await apiCall.json();
  
    if ( addressUnit && addressStreet && addressSuburb && addressRegion) {
          // tslint:disable-next-line:no-console
    console.log(data);
    this.setState({
      addressNumber: data[0].Address.PhysicalAddressNumber,
      addressRegion: data[0].Address.PhysicalAddressRegion,
      addressStreet: data[0].Address.PhysicalAddressStreet,
      addressSuburb: data[0].Address.PhysicalAddressSuburb,
      error: "",
      icpIdentifier: data[0].ICPIdentifier,
      icpStatus: data[0].ICPStatus,


    });
    } else {
      this.setState({
        addressNumber: undefined,
        addressRegion: undefined,
        addressStreet: undefined,
        addressSuburb: undefined,
        error: "Please fill in the values.",
        icpIdentifier: undefined,
        icpStatus: undefined,
  
  
      });
    }

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
                    <Grid item={true} sm={true}>
                        <Paper  style={style.Paper}  square={true}>
                            <div >
                            <Form getIcp={this.getIcp} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item={true} sm={true}>
                        <Paper  style={style.Paper}  square={true}>
                            <div>
                                <Energy 

                                addressNumber={this.state.addressNumber}
                                addressStreet={this.state.addressStreet}
                                addressSuburb={this.state.addressSuburb}
                                addressRegion={this.state.addressRegion}
                                icpIdentifier={this.state.icpIdentifier}
                                icpStatus={this.state.icpStatus}
                                error={this.state.error}
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

export default Icp; 


