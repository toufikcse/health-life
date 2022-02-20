import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input defaultValue="" placeholder='phone' {...register("phone")} />
                <input defaultValue="" placeholder='address' {...register("address")} />
                <input defaultValue="" placeholder='city' {...register("city")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Appointment;