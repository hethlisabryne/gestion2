import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'antd/es/form/Form';
import Home from '../Home/_index'; 
const Login = () => {
    const [form] = useForm();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const onFinish = () => {
        console.log(form.getFieldsValue());
        setIsLoggedIn(true);
    };

    const handleClick = () => {
        navigate('/Register');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {isLoggedIn ? (
                <Home />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name="username" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <p>you don't have account </p>
                        <Button type="primary" htmlType="submit" onClick={handleClick}>
                            register
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </>
    );
};

export default Login;
