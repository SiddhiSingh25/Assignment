import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowComplaint = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const showData = async () => {
    try {
      const res = await axios.get(
        "https://api.joincroose.com/croose/api/complain/list"
      );
      setData(res.data || []);
    } catch (err) {
      setError("Unable to fetch complaints");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const statusBadge = (status) => {
    if (status === "open") return "badge bg-warning";
    if (status === "closed") return "badge bg-success";
    return "badge bg-secondary";
  };

  const priorityBadge = (priority) => {
    if (priority === "high") return "badge bg-danger";
    if (priority === "medium") return "badge bg-info";
    return "badge bg-secondary";
  };

  return (
    <div className="container min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center fw-bold text-primary mb-4">
                Complaint List
              </h3>

              {/* Loading */}
              {loading && (
                <div className="text-center py-5 fw-semibold">
                  Loading complaints...
                </div>
              )}

              {/* Error */}
              {!loading && error && (
                <div className="alert alert-danger text-center">
                  {error}
                </div>
              )}

              {/* Empty */}
              {!loading && !error && data.length === 0 && (
                <div className="alert alert-info text-center">
                  No complaints found
                </div>
              )}

              {/* Table */}
              {!loading && !error && data.length > 0 && (
                <div
                  className="table-responsive"
                  style={{ maxHeight: "70vh" }}
                >
                  <table className="table table-hover align-middle">
                    <thead className="table-dark sticky-top">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Type</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.map((item, idx) => (
                        <tr key={item?.id || idx}>
                          <td>{idx + 1}</td>
                          <td className="fw-semibold">{item?.title}</td>
                          <td className="text-muted">
                            {item?.description}
                          </td>
                          <td>
                            <span
                              className={priorityBadge(item?.priority)}
                            >
                              {item?.priority || "N/A"}
                            </span>
                          </td>
                          <td>
                            <span
                              className={statusBadge(item?.status)}
                            >
                              {item?.status || "N/A"}
                            </span>
                          </td>
                          <td>{item?.type || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplaint;
