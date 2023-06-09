import { Button, Form, Input, Divider, message, notification } from 'antd';

import { callLogin } from '../../../services/api';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../redux/account/accountSlice';


const LoginPage = (props) => {

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    const dispatch = useDispatch;

    const onFinish = async (values) => {
        const { username, password } = values;
        setIsLogin(true);

        const res = await callLogin(username, password);
        setIsLogin(false);

        if (res?.data) {
            localStorage.setItem('access_token', res.data.access_token)
            dispatch(doLoginAction(res.data.user));
            message.success('Đăng nhập thành công!');
            navigate('/');
        } else {
            notification.error({
                message: "Có lỗi sảy ra",
                description: res.message
            });
        }
    };

    return (
        <div className='register-container'>
            <h2 style={{ textAlign: 'center' }}>Đăng Nhập</h2>
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
                    label="Email"
                    name="username"
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
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ margin: '0 auto' }} loading={isLogin}>
                        Đăng nhập
                    </Button>
                    <br /><br />
                    <Link to='/register'>Đăng ký </Link>
                </Form.Item>

            </Form>
        </div >
    )
}

export default LoginPage;