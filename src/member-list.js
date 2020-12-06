import React from "react";

import axios from "axios";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default class MemberList extends React.Component {
  state = {
    group_member: [],
  };

  componentDidMount() {
    axios
      .get(`http://172.30.51.247:5000/api/member/get_all_member_group`)
      .then((res) => {
        const group_member = res.data.group_member;
        this.setState({ group_member });
      });
  }

  render() {
    return (
      <Grid container component={Paper}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Group Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Average Score</TableCell>
              <TableCell>Max Score</TableCell>
              <TableCell>Min Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.group_member.map((group) => (
              <TableRow key={group.group_name}>
                <TableCell component="th" scope="row">
                  {group.group_name}
                </TableCell>
                {group.members.map((member) => (
                  <TableRow key={member.member_name}>
                    <TableCell>{member.member_name}</TableCell>
                    <TableCell>{member.score}</TableCell>
                    <TableCell>{member.grade}</TableCell>
                  </TableRow>
                ))}
                <TableCell>{group.average_score}</TableCell>
                <TableCell>{group.max_score}</TableCell>
                <TableCell>{group.min_score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    );
  }
}
