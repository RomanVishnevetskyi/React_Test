import React from 'react';
import './auth-form.css'
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm, Controller, useFormState, useController } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


interface ISignInForm {
    login: string;
    password: string;
}

const AuthForm = () => {
    const {handleSubmit, control,reset} = useForm<ISignInForm>({
        mode:"onChange"
    });
    const { errors,isValid } = useFormState({
        control,
    });


    const submitHandler:SubmitHandler<ISignInForm>=(data)=>{
        console.log(data)
        reset({login:'',password:''});
        console.log("errr",errors)

    }
    return (
        <div className='auth-form' onSubmit={handleSubmit(submitHandler)}>
            <Typography variant="h4" gutterBottom component="div" className='auth-form__subtitle__upper'>
                Войдите
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" className='auth-form__subtitle'>
                Что бы получить доступ
            </Typography>
            <form className="auth-form__form">
                <Controller
                    control={control}
                    rules={{ required: 'Enter login', minLength:{
                        value:5,
                            message:"login must be better then 5"
                        }}}
                    name="login"
                    render={({ field}) => (
                        <TextField
                            label="Login"
                            size='small'
                            margin="normal"
                            fullWidth={true}
                            className='auth-form__input'
                            onChange={(e)=>field.onChange(e)}
                            // value={field.value}
                            error={!!errors.login?.message}
                            helperText={errors.login?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true, minLength:{
                            value:6,
                            message:"Password's length must be more then 6 "
                        }}}

                    render={({ field }) => (
                        <TextField
                            label="password"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={ !!errors?.password?.message }
                            helperText={ errors?.password?.message }

                        />
                    )}
                />

                <Button disabled={!isValid} type="submit" variant="contained">Submit</Button>
            </form>

        </div>
    );
};

export default AuthForm;
