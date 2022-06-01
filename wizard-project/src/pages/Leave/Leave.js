import axios from "axios";
import React, { useEffect, useState } from "react";

import LeaveLayout from "../../components/allLeaveDetails/LeaveLayout";

const Leave = () => {
  const [leaveType, setLeaveType] = useState(null);
  const [leave, setLeave] = useState(null);
  const [update, setUpdate] = useState(false);

  const handleChange = (id, type, method) => {
    if (method === "delete") {
      if (type === "leave") {
        axios.delete(`http://localhost:9000/leave/${id}`).then((res) => {
          if (res.status === 200) {
            setLeave(leave?.filter((le) => le.id !== id));
          }
        });
      } else {
        axios.delete(`http://localhost:9000/leavetype/${id}`).then((res) => {
          if (res.status === 200) {
            setLeaveType(leaveType?.filter((le) => le.id !== id));
          }
        });
      }
    } else {
      const data = { Status: type };
      // console.log(id, type, method, data);
      axios.put(`http://localhost:9000/leave/${id}`, data).then((res) => {
        if (res.status === 200) {
          setUpdate(!update);
        }
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:9000/leavetype").then((res) => {
      setLeaveType(res.data);
    });

    axios.get("http://localhost:9000/leave").then((res) => {
      setLeave(res.data);
    });
  }, [update]);

  return (
    <LeaveLayout
      leave={leave}
      leaveType={leaveType}
      handleChange={handleChange}
    />
  );
};

export default Leave;
