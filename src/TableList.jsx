import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListData } from './store/action';

const TableList = () => {
    const dispatch = useDispatch();

    const apiResponse = useSelector((state) => state?.tableList?.data);

    const listData = apiResponse?.data

    console.log("Data", listData)

    useEffect(() => {
        dispatch(fetchListData());
    }, [dispatch]);


    return (
        <>
            {
                listData && listData.length > 0 && listData.map((d, i) => {
                    return (
                        <>
                            <div key={`id ${i}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "3rem",
                                    margin: '20px',
                                }}
                            >
                                <div style={{ minWidth: "10px" }}>{d.id}</div>
                                <div style={{ minWidth: "60px" }}>{d.first_name}</div>
                                <div>{d.email}</div>
                            </div>
                        </>
                    )
                })
            }
        </>
    );
};

export default TableList;