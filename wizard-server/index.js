const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

// const UPLOADS_FOLDER = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
    // cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: storage,
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

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
app.post("/addproject", upload.single("File"), (req, res) => {
  const newData = req.body;
  const File = `http://localhost:9000/images/${req.file.filename}`;
  const data = {
    ...newData,
    File,
  };

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
  // res.json(true);
});

app.get("/allproject", (req, res) => {
  connection.query(`SELECT * FROM all_projects WHERE 1`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // console.log(query);
  // res.json(true);
});
app.get("/allproject/:projectcategori", (req, res) => {
  const status = req.params.projectcategori;
  connection.query(
    `SELECT * FROM all_projects WHERE ProjectStatus = "${status}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
  // console.log(query);
  // res.json(true);
});

app.get("/project/:projectId", (req, res) => {
  const id = req.params.projectId;
  connection.query(
    `SELECT * FROM all_projects WHERE id = ${id}`,
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
      // console.log(result);
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

  connection.query(`SELECT * FROM all_client WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
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

app.post("/addpayment", (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_payment (${keys.map(
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

app.get("/allpayment", (req, res) => {
  connection.query("SELECT * FROM all_payment WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/allpayment/:paymentId", (req, res) => {
  const id = req.params.paymentId;

  connection.query(`DELETE FROM all_payment WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // res.json(true);
});

app.post("/addexpense", (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_expense (${keys.map(
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

app.get("/allexpense", (req, res) => {
  connection.query("SELECT * FROM all_expense WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/allexpense/:expenseId", (req, res) => {
  const id = req.params.expenseId;

  connection.query(`DELETE FROM all_expense WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // res.json(true);
});

app.get("/", (req, res) => {
  res.send("This is wizard software admin project");
});

app.listen(port, () => {
  console.log("listening to port", port);
});