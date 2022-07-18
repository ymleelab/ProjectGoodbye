import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import { css } from '@emotion/react';
import { Form, Button, Divider, Select, Input } from 'antd';
const { Search } = Input;
import 'antd/dist/antd.css';

const ObituaryDetail = () => {
	const onSearch = (value) => console.log(value);

	return (
		<AppLayout>
			<div css={titleImageStyle}>
				<p>부고 작성</p>
			</div>
			<Form
				labelCol={{
					span: 10,
				}}
				wrapperCol={{
					span: 50,
				}}
			>
				<h1 css={headerWrapper}>부고 작성</h1>
				<Divider orientation="left">상주</Divider>
				<section css={sectionWrapper}>
					<Form.Item label="고인간의 관계" required>
						<Select>
							<Select.Option value="배우자">배우자</Select.Option>
							<Select.Option value="아들">아들</Select.Option>
							<Select.Option value="딸">딸</Select.Option>
							<Select.Option value="며느리">며느리</Select.Option>
							<Select.Option value="사위">사위</Select.Option>
							<Select.Option value="손자">손자</Select.Option>
							<Select.Option value="손녀">손녀</Select.Option>
							<Select.Option value="외손자">외손자</Select.Option>
							<Select.Option value="외손녀">외손녀</Select.Option>
							<Select.Option value="직접입력">
								직접입력
							</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item label="상주명" required>
						<Input placeholder="상주명" />
					</Form.Item>
					<Form.Item label="연락처" required>
						<Input placeholder="010-1234-1234" />
					</Form.Item>
				</section>
				<Divider orientation="left">고인 정보</Divider>
				<section css={sectionWrapper}>
					<Form.Item label="고인명" required>
						<Input placeholder="고인명" />
					</Form.Item>
					<Form.Item label="나이" required>
						<Input placeholder="나이" />
					</Form.Item>

					<Form.Item label="성별" required>
						<Select>
							<Select.Option value="남자">남자</Select.Option>
							<Select.Option value="여자">여자</Select.Option>
						</Select>
					</Form.Item>
				</section>
				<Divider orientation="left">장례 정보</Divider>
				<section css={sectionWrapper}>
					<Form.Item label="장례식장 이름" required>
						<Input placeholder="장례식장 이름" />
					</Form.Item>
					<Form.Item label="빈소" required>
						<Input placeholder="빈소" />
					</Form.Item>
					<Form.Item label="장례식장 주소" required>
						<Search
							placeholder="장례식장 주소"
							onSearch={onSearch}
							enterButton
						/>
					</Form.Item>
					<Form.Item label="장례식장 연락처" required>
						<Input placeholder="010-1234-1234" />
					</Form.Item>

					<Form.Item label="임종일">
						<Input placeholder="임종일" />
					</Form.Item>
					<Form.Item label="입관일">
						<Input placeholder="입관일" />
					</Form.Item>
					<Form.Item label="발인일">
						<Input placeholder="발인일" />
					</Form.Item>
					<Form.Item label="장지">
						<Input placeholder="장지" />
					</Form.Item>
					<Form.Item label="전할말">
						<Input placeholder="전할말" />
					</Form.Item>
				</section>

				<Divider orientation="left"></Divider>
				<section css={sectionWrapper}>
					<div style={{ float: 'right' }}>
						<Button type="primary">등록</Button>
						<Link href={'/obituary_list'}>
							<Button>목록</Button>
						</Link>
					</div>
				</section>
			</Form>
		</AppLayout>
	);
};

export default ObituaryDetail;

const headerWrapper = css`
	margin: 2rem;
`;
const sectionWrapper = css`
	width: 70vw;
	margin: 2rem;

	& > div > Button {
		margin-right: 1rem;
	}

	&:last-child {
		margin-bottom: 20vh;
	}
`;
const titleImageStyle = css`
	position: relative;
	width: 100%;
	height: 300px;
	margin: 2rem 0;
	background-image: url('https://images.unsplash.com/photo-1528564031703-bf3181c2294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;

	& > p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 1.5rem;
	}
`;
