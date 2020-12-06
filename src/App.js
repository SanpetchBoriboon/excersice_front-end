import React, { Component } from "react";
import cors from "cors";
import { Grid } from "@material-ui/core";

import BasicTable from "./component/table/basic-table";
import PersonList from "./member-list";
class App extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid container item sm={12} md={12} lg={10}>
          {/* <BasicTable /> */}
          <PersonList />
        </Grid>
      </Grid>
    );
  }
}

export default App;
