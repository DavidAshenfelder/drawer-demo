import { Button } from "antd";
import { createAction } from '@reduxjs/toolkit'


export const ttcSubmit = createAction('detailView/submit', () => {
    console.log('TTC Submit');
    return {};
});

const TTC = () => {
    return (
        <>
            <h1>Transaction To Code Example</h1>
            <Button onClick={ttcSubmit}>TTC Submit</Button>
        </>
    )
};


export default TTC;
