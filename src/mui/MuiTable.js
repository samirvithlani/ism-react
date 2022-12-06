import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import {Link} from "react-router-dom";

export const MuiTable = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    await axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setdata(res.data.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "first_name",
      headerName: "First name",
      width: 150,
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 200,
    },
    {
      field: "action",
      Header: "Action",
      width: 200,
      renderCell:(cellValues)=>{
        return(
          <Button>
            <Link to={`/aboutus`}>Edit</Link>
          </Button>
        )
      }
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  ];

  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[6]}
          getRowId={(row) => row.id}
         
        />
      </Box>
    </div>
  );
};
