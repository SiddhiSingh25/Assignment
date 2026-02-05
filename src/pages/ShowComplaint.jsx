import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowComplaint = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const showData = async () => {
    let res = await axios.get(
      "https://api.joincroose.com/croose/api/complain/list",
    );
    if (res) {
      setData(res.data);
      setLoading(false)
    }
    
  };
  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="container-fluid vh-100 gradient">
      
      <div className="row h-100 d-flex align-items-start justify-content-center">
        <div className="col-sm-6 mt-5">
              <h1 className="text-center mb-3 text-info"> Complaint List</h1>


          <table className="table p-5 rounded ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
              </tr>
            </thead>

            <tbody className="w-full">
              <tr>
                <td colSpan="6">
                  {loading && <div className="py-3 text-center fw-bold w-full">Loading....</div> }
                </td>
              </tr>
              
              {data === null ? (
                <p>Cannot fetch data from the Server</p> ? (
                  data?.length === 0
                ) : (
                  <p>Loading....</p>
                )
              ) : (
                data.map((item, idx) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{idx+1}</th>
                      <td>{item?.title}</td>
                      <td>{item?.description}</td>
                      <td>{item?.priority}</td>
                      <td>{item?.status}</td>
                      <td>{item?.type}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowComplaint;
