import { Button } from "antd";
import { createAction } from '@reduxjs/toolkit'


export const detailSubmit = createAction('detailView/submit', () => {
    console.log('Detail Submit');
    return {};
});

const Details = () => {
    return (
        <>
            <h1>Demo 2</h1>
            <Button onClick={detailSubmit}>Detail Submit</Button>
        </>
    )
};

export default Details;
