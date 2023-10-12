import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';


  visibleParagraph: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim sum dolor sit amet consectetur...';
  hiddenParagraphs: string[] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim doloremque, voluptatibus obcaecati, dicta alias voluptatum expedita delectus. Illum, consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum doloribus natus! Consectetur distinctio, ducimus tenetur dolorem sunt voluptas enim'
  ];
  showHiddenParagraphs: boolean = false;

  toggleHiddenParagraphs() {
    this.showHiddenParagraphs = !this.showHiddenParagraphs;
  }

  showForm: boolean = false;
  assunto: string = '';
  conteudo: string = '';

  toggleFormVisibility() {
    this.showForm = !this.showForm;
    this.clearForm();
  }
    clearForm() {
      this.assunto = '';
      this.conteudo = '';
    }
    submitTopic() {
      // Lógica para enviar o tópico aqui
      console.log('Assunto:', this.assunto);
      console.log('Conteúdo:', this.conteudo);
      this.toggleFormVisibility();
    }
}


