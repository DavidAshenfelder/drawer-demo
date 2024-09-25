import { Button } from "antd";
import { createAction } from '@reduxjs/toolkit'
import { Input } from 'antd';
const { TextArea } = Input;


export const commentSubmit = createAction('comment/submit', () => {
    console.log('Submit Comment');
    return {};
});

const Comments = () => {
    return (
        <>
            <h1>Demo 2</h1>
            <TextArea rows={4} placeholder="leave a comment" />
            <Button onClick={commentSubmit}>Submit Comment</Button>
        </>
    )
};

export default Comments;
