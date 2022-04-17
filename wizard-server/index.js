const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wizard_software",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect successfull");
  }
});

//all routes for project 
app.post("/addproject", (req, res) => {
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_projects (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.json(result);
    }
  });
});

app.get("/allproject", (req, res) => {
  connection.query("SELECT * FROM all_projects WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/allproject/:projectId", (req, res) => {
  const id = req.params.projectId;

  connection.query(
    `SELECT * FROM all_projects WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.put("/updateproject/:projectId", (req, res) => {
  const id = req.params.projectId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_projects SET ${keys.map(
    (key) => key + " = ?"
  )} WHERE id = ${id}`;

  const value = keys.map((key) => {
    return data[key];
  });

  // for (const key in data) {
  //   console.log(key, "=", data[key]);
  // }
  // console.log(keys);
  // console.log(sqlquery);
  // console.log(value);

  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // res.json(true);
});

app.delete("/allproject/delete/:projectId", (req, res) => {
  const id = req.params.projectId;
  // console.log(id);

  connection.query(`DELETE FROM all_projects WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // res.json(true);
});


//all routes for employee

app.post("/addemployee", (req, res) => {
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_employee (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});


app.get("/employee", (req, res) => {
  connection.query("SELECT * FROM all_employee WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/employee/:employeeId", (req, res) => {
  const id = req.params.employeeId;

  connection.query(
    `SELECT * FROM all_employee WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.put("/employee/:employeeId", (req, res) => {
  const id = req.params.employeeId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_employee SET ${keys.map(
    (key) => key + " = ?"
  )} WHERE id = ${id}`;

  const value = keys.map((key) => {
    return data[key];
  });


  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});

app.delete("/employee/delete/:projectId", (req, res) => {
  const id = req.params.projectId;


  connection.query(`DELETE FROM all_employee WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});


//all routes for client

app.post("/addclient", (req, res) => {
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_client (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});

app.get("/client", (req, res) => {
  connection.query("SELECT * FROM all_client WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/client/:clientId", (req, res) => {
  const id = req.params.clientId;

  connection.query(
    `SELECT * FROM all_client WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.put("/client/:clientId", (req, res) => {
  const id = req.params.clientId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_client SET ${keys.map(
    (key) => key + " = ?"
  )} WHERE id = ${id}`;

  const value = keys.map((key) => {
    return data[key];
  });


  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});

app.delete("/client/delete/:clientId", (req, res) => {
  const id = req.params.clientId;


  connection.query(`DELETE FROM all_client WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });

});


app.get("/", (req, res) => {
  res.send("This is wizard software admin project");
});

app.listen(port, () => {
  console.log("listening to port", port);
});