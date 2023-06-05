import { Button, Form, Input, Divider, message, notification } from 'antd';

import { callRegister } from '../../../services/api';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const onFinish = async (values) => {
        const { fullName, email, password, phone } = values;
        setIsSubmit(true);

        const res = await callRegister(fullName, email, password, phone);

        setIsSubmit(false);

        if (res?.data?._id) {
            message.success('Đăng ký thành công!');
            navigate('/login');
        } else {
            notification.error({
                message: "Có lỗi sảy ra",
                description: res.message
            });
        }
    };

    return (
        <div className='register-container'>
            <h2 style={{ textAlign: 'center' }}>Đăng ký tài khoản</h2>
            <Divider />
            <Form
                name="control-hooks"
                onFinish={onFinish}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    margin: '0 auto'
                }}
            >
                <Form.Item
                    label="FullName"
                    name="fullName"
                    rules={[{ required: true, message: "nhập vào đê:))" }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "nhập vào đê:))" }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "nhập vào đê:))" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: "nhập vào đê:))" }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ margin: '0 auto' }} loading={isSubmit}>
                        Đăng ký
                    </Button>

                    <br /><br />
                    <Link to='/login'>Đăng nhập </Link>
                </Form.Item>
            </Form>
        </div >
    )
}

export default RegisterPage;