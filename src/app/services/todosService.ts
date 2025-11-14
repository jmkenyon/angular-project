import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [{
    title: 'Learn Angular',
    userId: 1,
    completed: false,
    id: 1,
  },
  {
    title: 'Build an Angular App',
    userId: 1,
    completed: false,
    id: 2,
  }
]
}
