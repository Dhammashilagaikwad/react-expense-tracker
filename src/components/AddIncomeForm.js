
import {  useForm } from "react-hook-form"
import { toast } from "react-toastify";

export default function AddIncomeForm() {
    const { register, handleSubmit,  reset, formState: { errors } } = useForm();

    const onSubmit  = (data => {
                    console.log("Income Added", data);
                    const existingIncome = JSON.parse(localStorage.getItem("income")) || [];
                    existingIncome.push(data);
                    localStorage.setItem("income", JSON.stringify(existingIncome));
                    reset();
                   
                     toast.success(" Income Added Successfully!", {
                          position: "top-right",
                          autoClose: 3000,
                          theme: "colored",
                        });
                })
    return (
        <>
            <div className="card " style={{ padding: "20px", marginTop: "20px" }}>
                <h4 className='text-info-emphasis'>Add Income</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="form-control" {...register("Source", { required: "This is required", validate: value => isNaN(value) || "Source must be a text string" })} placeholder='Enter Source' /> <br />
                    <p className="text-danger">{errors.Source?.message}</p>


                    <input type="number" className="form-control" {...register("Amount", { required: "This is required", min: { value: 1, message: "Amount must be a positive number" } })} placeholder='Enter Amount' /> <br />
                    <p className="text-danger">{errors.Amount?.message}</p>

                    <button type="submit" className="btn btn-success btn-lg">Add Income</button>
                </form>
            </div>


        </>
    )
}
