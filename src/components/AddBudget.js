import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function AddBudget() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const today = new Date();
    const monthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    setCurrentMonth(monthKey);
  }, []);

  const onSubmit = (data) => {
    console.log("Budget Added", data);


    const existingBudgets = JSON.parse(localStorage.getItem("monthlyBudget")) || {};
    existingBudgets[currentMonth] = Number(data.Budget);
    localStorage.setItem("monthlyBudget", JSON.stringify(existingBudgets));
    alert(` Budget of ₹${data.Budget} set for ${currentMonth}`);
    reset();

    toast.success(" Budget Added Successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
   <div className="  container ">
     <div className="card p-3 mt-4">
      <h4 className="text-info-emphasis"> Set Monthly Budget</h4>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="number"
          className="form-control mt-1"
          {...register("Budget", {
            required: "This field is required",
            min: { value: 1, message: "Budget must be positive" },
          })}
          placeholder="Enter your monthly budget"
        />
        <p className="text-danger">{errors.Budget?.message}</p>

        <button type="submit" className="btn btn-success btn-lg mt-2">
          Set Budget
        </button>
      </form>
    </div>
   </div>
  );
}
