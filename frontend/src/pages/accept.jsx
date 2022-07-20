import AppLayout from '../components/AppLayout';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { css } from '@emotion/react';
const Accept = () => {
	const sendConfirmation = () => {
		console.log('send');
	};

	return (
		<AppLayout>
			<div css={mainWrapper}>
				<section css={sectionWrapper}>
					확정하시면 생사여부 변경을 하실 수 있고 사망시 유언장을
					전송됩니다.
					<Button onClick={sendConfirmation}>확정</Button>
				</section>
			</div>
		</AppLayout>
	);
};

export default Accept;

const mainWrapper = css`
	display: flex;
	justify-content: center;
	width: 100%;
	// height: 85vh;
	margin: 10rem; //추가
`;

const sectionWrapper = css`
	// width: 25em; //longer than signin
	// margin: auto;
`;
