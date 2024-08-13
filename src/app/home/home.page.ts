import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = '';
  description: string = '';
  tasks: { titulo: string; description: string; done: boolean }[] = [];
  editingIndex: number | null = null;

  constructor() {}

  onSubmit(form: NgForm) {
    if (this.title && this.description) {
      const formattedTitle = this.title.trim();
      const formattedDescription = this.description.trim();

      if (this.editingIndex !== null) {
        this.tasks[this.editingIndex] = { titulo: formattedTitle, description: formattedDescription, done: this.tasks[this.editingIndex].done };
        this.editingIndex = null;
      } else {
        this.tasks.push({ titulo: formattedTitle, description: formattedDescription, done: false });
      }

      form.reset();
    }
  }

  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editingIndex === index) {
      this.editingIndex = null; 
    }
  }

  editTask(index: number) {
    this.title = this.tasks[index].titulo;
    this.description = this.tasks[index].description;
    this.editingIndex = index;
  }

  showNotifications() {
    console.log('Notifications: ', this.tasks.length);
  }
}
