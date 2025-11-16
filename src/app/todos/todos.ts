import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todosService';
import { Todo } from '../model/todo.type';
import { catchError, delay } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})

export class Todos implements OnInit {
 

  
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  isLoading = signal(true);

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        delay(1500),
        catchError((err) => {
          console.error('Error fetching todos', err);
          this.isLoading.set(false);

          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
        this.isLoading.set(false); 
      });
  }
}
