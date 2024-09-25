import { Button } from "antd";
import { createAction } from '@reduxjs/toolkit'


export const ttcSubmit = createAction('detailView/submit', () => {
    console.log('TTC Submit');
    return {};
});

const Demo1 = () => {
    return (
        <>
            <h1>Demo 1</h1>
            <Button onClick={ttcSubmit}>TTC Submit</Button>
        </>
    )
};


export default Demo1;
