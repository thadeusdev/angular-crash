import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() OnToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  onDelete(task: any) {
    this.OnDeleteTask.emit(task)
  }

  onToggle(task: any) {
    this.OnToggleReminder.emit(task)
  }

}
