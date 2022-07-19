import React, { useState } from "react";

import Image from 'next/image';
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Comment, Form, Input } from "antd";
import { FcFrame } from 'react-icons/fc';
import { MdOutlineCropPortrait, MdOutlinePortrait, MdPortrait } from 'react-icons/md';
import { BsFlower1 } from 'react-icons/bs';
import { GiFlowerPot, GiGraveFlowers, GiPortrait } from 'react-icons/gi';

import { TbRectangleVertical } from 'react-icons/tb';
import useInput from './../hooks/useInput';
import AppLayout from "../components/AppLayout";
import { Button } from "../util/common_styles";
import Flower from '../assets/lily.svg';



const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <label htmlFor="writing">
                고인에게 전할 말을 남겨주세요:
            </label>
            <TextArea rows={4} onChange={onChange} value={value} id="writing" />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" onClick={onSubmit}>
                Add Comment
            </Button>
        </Form.Item>
    </>
);


const remembrance = () => {
    const [introTitle, setIntroTitle] = useState('따뜻한 말을 남겨주세요..');
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, valueHandler, setValue] = useInput('');


    console.log(comments);


    const handleCommentChange = (e) => {
        return valueHandler(e);
    }

    const handleCommentSubmit = (e) => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments((prev) => [
                ...prev,
                {
                    "writer": "김철수",
                    "title": "보고싶어요",
                    "content": "그립습니다.",
                    "password": "1234"
                },
            ]);
        }, 500);
    }

    return (
        <>
            <AppLayout>
                <Introduction>
                    <div css={adBoxStyle}>
                        <div css={adContentStyle}>
                            <h1>{introTitle}</h1>
                            <h2>-추모 공간입니다-</h2>
                            <input type="file" name="file" alt="사진 업로드 하기" />
                        </div>
                        <div css={imageStyle}>
                            <Image
                                src="https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FybSUyMGhlYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                                alt="추모 사진"
                                layout="fill"
                                priority
                            />
                        </div>
                    </div>
                </Introduction>
                <CommentTree>
                    <Portrait>
                        <Frame>
                            <TbRectangleVertical />
                        </Frame>
                        <Decorator>
                            <BsFlower1 />
                        </Decorator>
                        <Decorator>
                            <BsFlower1 />
                        </Decorator>
                        <Decorator>
                            <BsFlower1 />
                        </Decorator>
                        <Decorator>
                            <BsFlower1 />
                        </Decorator>
                    </Portrait>
                    {comments.length > 0 && <Flower />}
                    <CommentArea>
                        <Comment
                            content={
                                <Editor
                                    onChange={handleCommentChange}
                                    onSubmit={handleCommentSubmit}
                                    submitting={submitting}
                                    value={value}
                                />
                            }
                        />
                    </CommentArea>
                </CommentTree>
            </AppLayout>
        </>
    )
}

{/* <FcFrame />
<MdOutlineCropPortrait />
<MdPortrait />
<BsFlower1 />
<GiFlowerPot />
<GiGraveFlowers /> */}

export default remembrance;


const adBoxStyle = css`
	display: flex;
	width: 100%;
	height: 30rem;
	//margin: 10rem 0;
	padding: 2rem;
	align-item: center;
    box-sizing: border-box;

	&:nth-of-type(even) {
		flex-direction: row-reverse;
	}
`;

const adContentStyle = css`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const imageStyle = css`
	position: relative;
	width: 50%;
	line-height: 10rem;
	background-color: silver;
`;


const Introduction = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background-color: thistle;
`

const CommentTree = styled.div`

`

const Portrait = styled.div`
    text-align: center;
    
`

const Frame = styled.div`
    position: relative;
    color: dimgray;
    z-index: 1;
    svg {
        width: 300px;
        height: auto;
        opacity: 0.5;
    }
`

const Decorator = styled.div`
    position: relative;
    display: inline-block;
    z-index: 2;
    bottom: 50px;
    color: lightgoldenrodyellow;
`

const CommentArea = styled.div`
    text-align: center;
    label, textarea {
        font-size: .8rem;
        letter-spacing: 1px;
    }
    textarea {
        padding: 10px;
        max-width: 100%;
        line-height: 1.5;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px #999;
    }
    
    label {
        display: block;
        margin-bottom: 10px;
    }
`

const TextArea = styled.textarea`

` 