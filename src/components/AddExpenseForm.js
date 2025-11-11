import React from 'react';
import { useForm } from "react-hook-form";
import AddIncomeForm from './AddIncomeForm';
import { toast } from "react-toastify";
import AddBudget from './AddBudget';

export default function AddExpenseForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Expense Added", data);


        const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        existingExpenses.push(data);
        localStorage.setItem("expenses", JSON.stringify(existingExpenses));


        reset();


        toast.success(" Expense Added Successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
        });
    };

    return (
        <div className='container  mb-5 mt-4'>
            <div className='row g-4'>
                <div className='col-12 col-md-6'>
                    <div className="card" style={{ padding: "20px", marginTop: "20px" }}>
                        <h4 className='text-info-emphasis'>Add Expense</h4>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                className="form-control"
                                {...register("Category", {
                                    required: "This is required",
                                    validate: value =>
                                        isNaN(value) || "Category must be a text string"
                                })}
                                placeholder='Enter Category'
                            />
                            <p className="text-danger">{errors.Category?.message}</p>

                            <input
                                type='date'
                                className="form-control"
                                {...register("Date", { required: "This is required" })}
                            />
                            <p className="text-danger">{errors.Date?.message}</p>

                            <input
                                type="number"
                                className="form-control"
                                {...register("Amount", {
                                    required: "This is required",
                                    min: { value: 1, message: "Amount must be a positive number" },
                                })}
                                placeholder='Enter Amount'
                            />
                            <p className="text-danger">{errors.Amount?.message}</p>

                            <button type="submit" className="btn btn-success btn-lg">
                                Add Expense
                            </button>
                        </form>
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <AddIncomeForm />
                </div>


            </div>
            <AddBudget />
      </div>
            
       
    );
}
