import { List } from "antd";

const ListView = ({ onClick }) => {
    const data = [
      'Thing 1',
      'Thing 2',
      'Thing 3',
    ];
  
    return (
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={onClick} style={{ cursor: 'pointer'}}>
            {item}
          </List.Item>
        )}
      />
    );
  };

  export default ListView;