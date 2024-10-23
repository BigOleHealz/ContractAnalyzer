interface Task {
    id: string;
    title: string;
    description: string;
    status: 'To Do' | 'In Progress' | 'Done';
    sprintId?: string; // New field for sprint association
    storyPoints?: number; // New field for story points
}

const tasks: Task[] = [];

export const addTask = (task: Task) => {
    tasks.push(task);
};

export default tasks;