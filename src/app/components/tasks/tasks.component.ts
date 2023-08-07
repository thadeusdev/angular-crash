import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []
  taskService: TaskService = inject(TaskService)

  constructor(){
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
