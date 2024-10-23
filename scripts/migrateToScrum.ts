import { Task } from '../models/taskModel';

const migrateToScrum = (tasks: Task[]) => {
    tasks.forEach(task => {
        if (!task.sprintId) {
            task.sprintId = 'default-sprint';
        }
        if (!task.storyPoints) {
            task.storyPoints = 0;
        }
    });
};

export default migrateToScrum;