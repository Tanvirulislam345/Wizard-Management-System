const express = require("express");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { KeyObject } = require("crypto");
const { json } = require("express/lib/response");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

// const UPLOADS_FOLDER = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
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

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tanvir.topader345@gmail.com",
    pass: "elplcshyuaqvmhya",
  },
});

app.post("/adminmatch/:email", (req, res) => {
  const data = req.body;
  connection.query(
    `SELECT * FROM all_admin WHERE Role = "${data.role}" AND Email = "${data.email}" AND Password = "${data.password}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result[0]);
      }
    }
  );
});
app.post("/employeematch/:email", (req, res) => {
  const data = req.body;

  connection.query(
    `SELECT * FROM all_employee WHERE Role = "${data.role}" AND Email = "${data.email}" AND Password = "${data.password}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
});

app.post("/clientmatch/:email", (req, res) => {
  const data = req.body;
  connection.query(
    `SELECT * FROM all_client WHERE Role = "${data.role}" AND Email = "${data.email}" AND Password = "${data.password}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
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
      res.json(result);
    }
  });
});

app.get("/allproject", (req, res) => {
  connection.query(`SELECT * FROM all_projects WHERE 1`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
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
});

app.get("/project/:projectId", (req, res) => {
  const id = req.params.projectId;
  connection.query(
    `SELECT * FROM all_projects WHERE ProjectId = "${id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result[0]);
        res.json(result[0]);
      }
    }
  );
});

app.get("/clientproject/:projectId", (req, res) => {
  const id = req.params.projectId;
  connection.query(
    `SELECT * FROM all_projects WHERE ClientId = '${id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
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
  )} WHERE ProjectId = "${id}"`;

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
app.put("/updateprojectstatus/:projectId", (req, res) => {
  const id = req.params.projectId;
  const data = JSON.stringify(req.body);
  const sqlquery = `UPDATE all_projects SET  Phases = ? WHERE ProjectId = "${id}"`;
  connection.query(sqlquery, data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/allproject/delete/:projectId", (req, res) => {
  const id = req.params.projectId;
  // console.log(id);

  connection.query(
    `DELETE FROM all_projects WHERE ProjectId="${id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
  // res.json(true);
});

//all routes for employee
app.post("/addemployee", async (req, res) => {
  const data = req.body;

  const info = {
    from: "tanvir.topader345@gmail.com",
    to: `${data?.Email}`,
    subject: "Created Your profile By Wizard Software Ltd",
    text: `Hello ${data?.FullName}`,
    html: `<div>
            <p>Role : ${data?.Role}</p>
            <p>Email : ${data?.Email}</p>
            <p>Password : ${data?.Password}</p>
         </div>`,
  };

  await transporter.sendMail(info, (err) => {
    if (err) {
      console.log("This is an error", err);
    } else {
      console.log("email has send");
    }
  });

  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_employee (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  await connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  // res.json(true);
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

app.post("/addclient", async (req, res) => {
  const data = req.body;

  const info = {
    from: "tanvir.topader345@gmail.com",
    to: `${data?.Email}`,
    subject: "Created Your profile By Wizard Software Ltd",
    text: `Hello ${data?.FullName}`,
    html: `<div>
            <p>Role : ${data?.Role}</p>
            <p>Email : ${data?.Email}</p>
            <p>Password : ${data?.Password}</p>
         </div>`,
  };

  await transporter.sendMail(info, (err) => {
    if (err) {
      console.log("This is an error", err);
    } else {
      console.log("email has send");
    }
  });

  const keys = Object.keys(data);
  const sqlquery = `INSERT INTO all_client (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  await connection.query(sqlquery, value, (err, result) => {
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
    `SELECT * FROM all_client WHERE ClientId= '${id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
});

app.get("/projectclient/:clientId", (req, res) => {
  const id = req.params.clientId;

  connection.query(
    `SELECT * FROM all_client WHERE ClientId='${id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
  // res.json(true);
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

  connection.query(
    `DELETE FROM all_client WHERE ClientId="${id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
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

app.get("/projectpayments/:paymentId", (req, res) => {
  const id = req.params.paymentId;

  connection.query(
    `SELECT * FROM all_payment WHERE ProjectId="${id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.json(result);
      }
    }
  );
  // res.json(true);
});
app.get("/allpayments/:paymentId", (req, res) => {
  const id = req.params.paymentId;

  connection.query(
    `SELECT * FROM all_payment WHERE ProjectId="${id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.json(result[result.length - 1]);
      }
    }
  );
  // res.json(true);
});
app.get("/allpayment/:paymentId", (req, res) => {
  const id = req.params.paymentId;

  connection.query(
    `SELECT * FROM all_payment WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
  // res.json(true);
});
app.put("/allpayment/:paymentId", (req, res) => {
  const id = req.params.paymentId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_payment SET ${keys.map(
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

app.get("/allexpense/:expenseId", (req, res) => {
  const id = req.params.expenseId;

  connection.query(
    `SELECT * FROM all_expense WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
  // res.json(true);
});

app.put("/allexpense/:expenseId", (req, res) => {
  const id = req.params.expenseId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_expense SET ${keys.map(
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

app.post("/salary", (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_salary(${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  const value = keys.map((key) => {
    return data[key];
  });

  connection.query(sqlquery, value, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

app.get("/salary/present", (req, res) => {
  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = today.getMonth() - 1;
  const Month = monthNames[month];

  connection.query(
    `SELECT * FROM all_salary WHERE Month = "${Month}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.post("/salary/search", (req, res) => {
  const data = req.body;

  const keys = Object.keys(data);
  const value = keys.map((key) => {
    return `${key} = "${data[key]}"`;
  });

  connection.query(
    `SELECT * FROM all_salary WHERE ${value.join(" " + "AND" + " ")}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    }
  );
});

app.post("/addattendence", (req, res) => {
  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate() + " " + monthNames[month] + " " + year;

  const datas = req.body;
  const newData = datas.map((data) => {
    return {
      ...data,
      Date: date,
      Month: monthNames[month],
      Year: year,
    };
  });

  const keys = Object.keys(newData[0]);

  const sqlquery = `INSERT INTO all_attendence (${keys.map(
    (key) => key
  )}) VALUES (${keys.map((key) => "?")})`;

  newData.map((data, index) => {
    const value = keys.map((key) => {
      return data[key];
    });

    connection.query(sqlquery, value, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (datas.length - 1 === index) {
          res.json(result);
        }
      }
    });
  });
});

app.get("/allattendence/present", (req, res) => {
  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate() + " " + monthNames[month] + " " + year;
  connection.query(
    `SELECT * FROM all_attendence WHERE Date = "${date}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});
app.get("/allattendence", (req, res) => {
  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = today.getMonth() - 1;
  const Month = monthNames[month];
  connection.query(
    `SELECT * FROM all_attendence WHERE Month = "${Month}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.post("/allattendence/search", (req, res) => {
  const data = req.body;
  console.log(data);
  const keys = Object.keys(data);
  const value = keys.map((key) => {
    return `${key} = "${data[key]}"`;
  });

  connection.query(
    `SELECT * FROM all_attendence WHERE ${value.join(" " + "AND" + " ")}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result);
      }
    }
  );
  // res.json(true);
});

app.post("/addleavetype", (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_leavetype (${keys.map(
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

app.get("/leavetype", (req, res) => {
  connection.query("SELECT * FROM all_leavetype WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/leavetype/:leavetypeId", (req, res) => {
  const id = req.params.leavetypeId;
  connection.query(
    `SELECT * FROM all_leavetype WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result[0]);
      }
    }
  );
});

app.put("/leavetype/:leavetypeId", (req, res) => {
  const id = req.params.leavetypeId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_leavetype SET ${keys.map(
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

app.delete("/leavetype/:leavetypeId", (req, res) => {
  const id = req.params.leavetypeId;

  connection.query(
    `DELETE FROM all_leavetype WHERE id=${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );
});

app.post("/addleave", (req, res) => {
  const data = req.body;
  const keys = Object.keys(data);

  const sqlquery = `INSERT INTO all_leave (${keys.map(
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

app.get("/leave", (req, res) => {
  connection.query("SELECT * FROM all_leave WHERE 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/leave/:leaveId", (req, res) => {
  const id = req.params.leaveId;
  connection.query(`SELECT * FROM all_leave WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result[0]);
    }
  });
});

app.put("/leave/:leaveId", (req, res) => {
  const id = req.params.leaveId;
  const data = req.body;

  const keys = Object.keys(data);

  const sqlquery = `UPDATE all_leave SET ${keys.map(
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

app.delete("/leave/:leaveId", (req, res) => {
  const id = req.params.leaveId;

  connection.query(`DELETE FROM all_leave WHERE id=${id}`, (err, result) => {
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
