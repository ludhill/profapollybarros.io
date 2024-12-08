import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../../tarefa';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:3000/tasks';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.apiUrl);
  }
  deleteTask(tarefa:Tarefa):Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`);
  }
}