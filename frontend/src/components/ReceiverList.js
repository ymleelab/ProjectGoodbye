import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Modal, List, Skeleton, Avatar } from "antd";




function showCoverList(people) {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(people[i]);
    }
    return arr;
}

const ReceiverList = ({ will }) => {
    const [showList, setShowList] = useState(false);

    const count = 3;
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false); 

                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;


    return (
        <ListWrapper>
            <HumanList>
                {
                    <>
                        <ul>
                            {showCoverList(will.receivers).map((content, i) =>
                            (
                                <ListContent key={content + `${i}`}>{content}</ListContent>
                            ))}
                        </ul>
                        <ListContent>...</ListContent>
                    </>
                }
                <Modal title="ReceiverList Modal" visible={showList} onCancel={() => setShowList(false)}>
                    <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name?.last}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    <div>content</div>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </Modal>
            </HumanList>
            <Button type="button"
                css={ListSpreadBtnStyle}
                onClick={() => setShowList(true)}>
                더보기
            </Button>
        </ListWrapper>
    )
}

export default ReceiverList;

const ListWrapper = styled.div`
    display: flex;
`

const Button = styled.button`
    color: #3E606F;           
    background-color: #D1DBBD;
    border: none;
`

const ListSpreadBtnStyle = css`
    float: right;
    margin-bottom: 0.5rem;
`

const HumanList = styled.div`
    clear: both;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`
const ListContent = styled.li`
    float: left;
    border-radius: 5px;
    color: #FCFFF5;
    background-color: #91AA9D;
    width: 5rem;
    height: 1.5rem;  
    text-align: center;    
    margin: 0 0.5rem 0.5rem 0;           
`