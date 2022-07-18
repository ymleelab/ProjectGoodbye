import React, { useState } from "react";

import Image from 'next/image';
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import AppLayout from "../components/AppLayout";
import { Button } from "../util/common_styles";


const remembrance = () => {
    const [introTitle, setIntroTitle] = useState('따뜻한 말을 남겨주세요..');

    return (
        <>
            <AppLayout>
                <Introduction>
                    <div css={adBoxStyle}>
                        <div css={adContentStyle}>
                            <h1>{introTitle}</h1>
                            <h2>-추모 공간입니다-</h2>
                            <Button >사진 업로드하기</Button>
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
                    
                </CommentTree>
            </AppLayout>
        </>
    )
}

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