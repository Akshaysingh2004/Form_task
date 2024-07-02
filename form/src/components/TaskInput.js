
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addData, updateData, setEditId } from '../actions/fileActions';

const TaskInput = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const editId = useSelector((state) => state.editId);
  const [fields, setFields] = useState({});

  useEffect(() => {
    if (editId !== null) {
      const itemToEdit = data.find((item) => item.id === editId);
      setFields({
        Task: itemToEdit.Task,
      });
    } else {
      setFields({});
    }
  }, [editId, data]);

  const handleChange = (e, field) => {
    setFields({ ...fields, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Task } = fields;

    if (Task) {
      if (editId !== null) {
        dispatch(updateData(editId, fields));
      } else {
        dispatch(addData({
          id: data.length + 1,
          Task,
        }));
      }
    }
    setFields({});
    dispatch(setEditId(null)); // Clear editId after submission
  };

  return (
    <div>
      <h1 className="text-warning">{editId !== null ? 'Edit Task' : 'Add Task'}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="fw-bold">Task:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            style={{ width: "470px" }}
            value={fields.Task || ""}
            onChange={(e) => handleChange(e, "Task")}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          {editId !== null ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default TaskInput;
