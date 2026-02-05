import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    title: yup.string().required().min(2).max(35),
    description: yup.string().required().min(10).max(150),
  })
  .required();

const AddComplaint = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate()

  const complaintHandler = async (data) => {
    try {
      let res = await axios.post(
        "https://api.joincroose.com/croose/api/complain/add",
        data,
      );
      if (res) {
        Swal.fire('Add Complaint', res.message || "Successful" , 'Error');
        navigate("/")
        reset()
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        Swal.fire('The Server?', error?.response?.data?.message || "Got an error" , 'Error');
      }
      Swal.fire('The Server?', error?.message || "Got an error" , 'Error');
    }
  };

  return (
    <>
      <div className="container-fluid vh-100 gradient ">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-sm-6 ">
            <div className="py-5 rounded px-5 shadow-lg my-5 bg-dark">
              <h1 className="text-center mb-3 text-info">Add Complaint</h1>

              <form onSubmit={handleSubmit((data) => complaintHandler(data))}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  className={`form-control ${errors.name ? "mb-1" : "mb-3"} `}
                />
                {errors?.name && (
                  <p className={`${errors.name ? "mb-3" : ""} text-danger `}>
                    {errors?.name?.message}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={`form-control ${errors.email ? "mb-1" : "mb-3"} `}
                />
                {errors?.email && (
                  <p className={`${errors.email ? "mb-3" : ""} text-danger `}>
                    {errors?.email?.message}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Enter the title"
                  {...register("title")}
                  className={`form-control ${errors.title ? "mb-1" : "mb-3"} `}
                />
                {errors?.title && (
                  <p className={`${errors.title ? "mb-3" : ""} text-danger `}>
                    {errors?.title?.message}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Enter the description"
                  {...register("description")}
                  className={`form-control ${errors.description ? "mb-1" : "mb-3"} `}
                />
                {errors?.description && (
                  <p
                    className={`${errors.description ? "mb-3" : ""} text-danger `}
                  >
                    {errors?.description?.message}
                  </p>
                )}

                <input
                  type="submit"
                  className={`form-control btn btn-info  `}
                  value={"Add Complaint"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComplaint;
