import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo: string = '';
  descripcion: string = '';
  tasks: { titulo: string; descripcion: string; done: boolean }[] = [];

  constructor() {}

  onSubmit(form: NgForm) {
    if (this.titulo && this.descripcion) {

      const formattedTitulo = (this.titulo.trim());
      const formattedDescripcion = (this.descripcion.trim());

      this.tasks.push({ titulo: formattedTitulo, descripcion: formattedDescripcion, done: false });

      console.log('Título (formateado):', formattedTitulo);
      console.log('Descripción (formateada):', formattedDescripcion);

      form.reset();
    }
  }


  toggleDone(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
