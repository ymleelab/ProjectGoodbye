import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'antd/dist/antd.css';
import { Divider, List, Modal } from 'antd';

import AppLayout from './../components/AppLayout';
import { Button } from './../util/common_styles';

const receiver_page = () => {
    const [registFormVisible, setRegistFormVisible] = useState(false);
    const [relationValue, setRelationValue] = useState('');

    // 리스트 등록하기
    // useEffect(() => {
    //     const token = sessionStorage.getItem('token');
    //     const userId = sessionStorage.getItem('userId');
    //     axios.post(`/api/auth/${userId}/receiver`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }, []);

    const handleOk = (e) => {
        console.log(e);
    }

    const handleCancel = () => {
        setRegistFormVisible(prev => false);
    }

    const onChangeRelation = (e) => {
        console.log(e.target.value);
        const selection = e.target.value;
        // setRelationValue(() => {
        //     if (selection === 'typing')
        //     return selection;
        // })
    }

    const onSubmitRegistForm = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem('token');
        const userId = sessionStorage.getItem('userId');
        const submitData = new FormData(e.target);
        const fullName = submitData.get('name');
        const emailAddress = submitData.get('email');
        const relation = submitData.get('input_relation');
        // console.log(data.get('name'), data.get('input_relation'));
        axios.post(`/api/auth/${userId}/receiver`, {
            fullName,
            emailAddress,
            userId,
            relation,
            role: 'user'
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
}

console.log(relationValue);

return (
    <AppLayout>
        <Button type='button'
            onClick={() => setRegistFormVisible(prev => !prev)}
        >리스트 등록하기</Button>
        {registFormVisible &&
            <Modal
                title="registerForm"
                visible={registFormVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button form="registerForm" key="submit" htmlType="submit">
                        Submit
                    </Button>
                ]}
            >
                <form id='registerForm' onSubmit={onSubmitRegistForm}>
                    <div>
                        <label htmlFor='name'>이름:
                            <input name='name'></input>
                        </label>
                    </div>
                    <div>
                        <label htmlFor='email'>이메일:
                            <input name='email'></input>
                        </label>
                        <Button type='button'>이메일 중복 확인</Button>
                    </div>
                    <div>
                        <label htmlFor='relation'>관계:
                            <select onChange={(e) => onChangeRelation(e)}>
                                <option value="">--관계를 선택하세요--</option>
                                <option value="family">가족</option>
                                <option value="relative">친척</option>
                                <option value="friend">친구</option>
                                <option value="acquaintance">지인</option>
                                <option value="typing">직접입력</option>
                            </select>
                            <input name='input_relation'></input>
                        </label>
                    </div>
                </form>
            </Modal>
        }
        <Divider orientation="left">가족</Divider>
        <List />
        <Divider orientation="left">친척</Divider>
        <List />
        <Divider orientation="left">친구</Divider>
        <List />
        <Divider orientation="left">지인 및 그 외</Divider>
        <List />
    </AppLayout>
)
}

export default receiver_page;