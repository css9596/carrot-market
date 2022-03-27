import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

/*
 * ToDo
 *  1. Less Code v
 *  2. Better Validation
 *  3. Better Errors(Set, Clear, Display)
 *  4. Have Control over inputs
 *  5. Don't deal with events v
 *  6. Easier Inputs v
 *
 * React Hook Form 으로 변경하기.
 * Rule
 * 1. 모든 것은 useForm Hook 에서 나온다.
 * 2. input 들을 전부 state 에 '등록'하기 위해선, register 함수를 사용한다.
 * 3. watch()는 폼을 볼 수 있게 해준다.
 * 4. register
 *  register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
               이 메서드를 사용하면 input을 등록하거나 엘리먼트를 선택하고 React Hook Form에
               유효성 검사 규칙을 적용할 수 있습니다.
               유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 지정 유효성 검사 방법도 허용합니다.
 * */

interface LoginForm {
    username: string;
    password: string;
    email: string;
}

export default function Forms() {
    const { register, watch, handleSubmit } = useForm<LoginForm>();
    const onValid = (data: LoginForm) => {};
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };
    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register('username', {
                    required: 'Username is required',
                    minLength: {
                        message: 'The username should be longer than 5 chars.',
                        value: 5,
                    },
                })}
                type="text"
                placeholder="Username"
            />
            <input
                {...register('email', {
                    required: 'Email is required',
                })}
                type="email"
                placeholder="Email"
            />
            <input
                {...register('password', {
                    required: 'Password is required',
                })}
                type="password"
                placeholder="Password"
            />
            <button type="submit">submit</button>
        </form>
    );
}
