import React from "react";
import styles from "./addtask.module.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "../../redux/features/boardsSlice";
import { users, getOwnerNameById } from "../../../utils/users";

function AddTaskCard({ onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { title, status, description, storyPoint, owner, taskId, priority } =
      data;
    const newColIndex = 0;

    dispatch(
      addTask({
        title,
        status,
        description,
        storyPoint,
        owner: {
          id: owner,
          name: getOwnerNameById(owner),
        },
        taskId,
        priority,
        newColIndex,
      })
    );
    onClose();
    reset();
  };

  return (
    <div className={styles.card_overlay}>
      <div className={styles.card_overlay__card_form}>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className={styles.input}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className={styles.error}>Title is required</span>
            )}
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              {...register("status", { required: true })}
              className={styles.select}
            >
              <option value="todo" defaultValue>
                To Do
              </option>
              <option value="done">Done</option>
            </select>
            {errors.status && (
              <span className={styles.error}>Status is required</span>
            )}
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              {...register("description")}
            ></textarea>
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="storyPoint">Scrum Point</label>
            <input
              type="text"
              id="storyPoint"
              name="storyPoint"
              className={styles.input}
              {...register("storyPoint", { required: true })}
            />
            {errors.storyPoint && (
              <span className={styles.error}>Scrum Point is required</span>
            )}
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="owner">Owner</label>
            <select
              id="owner"
              name="owner"
              {...register("owner", { required: true })}
              className={styles.select}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            {errors.owner && (
              <span className={styles.error}>Owner is required</span>
            )}
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="taskId">Task ID</label>
            <input
              type="text"
              id="taskId"
              name="taskId"
              className={styles.input}
              {...register("taskId", { required: true })}
            />
            {errors.taskId && (
              <span className={styles.error}>Task ID is required</span>
            )}
          </div>
          <div className={styles.card_overlay__card_form__form_group}>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              {...register("priority", { required: true })}
              className={styles.select}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <span className={styles.error}>Priority is required</span>
            )}
          </div>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskCard;
