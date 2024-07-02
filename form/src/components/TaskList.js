
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { deleteData, setEditId } from '../actions/fileActions';

const TaskList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleEdit = (id) => {
    dispatch(setEditId(id));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this data?')) {
      dispatch(deleteData(id));
    }
  };

  return (
    <div>
      <h1 className="pt-4 text-danger">Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Task}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(item.id)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
