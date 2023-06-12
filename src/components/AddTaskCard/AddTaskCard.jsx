import React from "react";
import styles from "./addtask.module.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { addTask } from '../../redux/features/boardsSlice';

function AddTaskCard({ onClose }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { title, status, description, scrumPoint, owner, taskId } = data;
    const newColIndex = 0;

    dispatch(
      addTask({
        title,
        status,
        description,
        scrumPoint,
        owner,
        taskId,
        newColIndex,
      })
    );
    onClose();
    reset();
  };

  return (
    <div className={styles.cardOverlay}>
      <div className={styles.cardForm}>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.input}
              {...register("title", { required: true })}
            />
            {errors.title && <span className={styles.error}>Title is required</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select id="status" name="status" {...register("status", { required: true })} className={styles.select}>
              <option value="todo" defaultValue>
                To Do
              </option>
              <option value="done">Done</option>
            </select>
            {errors.status && <span className={styles.error}>Status is required</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              {...register("description")}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="scrumPoint">Scrum Point</label>
            <input
              type="text"
              id="scrumPoint"
              name="scrumPoint"
              className={styles.input}
              {...register("scrumPoint", { required: true })}
            />
            {errors.scrumPoint && <span className={styles.error}>Scrum Point is required</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="owner">Owner</label>
            <select id="owner" name="owner" {...register("owner", { required: true })} className={styles.select}>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
            {errors.owner && <span className={styles.error}>Owner is required</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="taskId">Task ID</label>
            <input
              type="text"
              id="taskId"
              name="taskId"
              className={styles.input}
              {...register("taskId", { required: true })}
            />
            {errors.taskId && <span className={styles.error}>Task ID is required</span>}
          </div>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskCard;
