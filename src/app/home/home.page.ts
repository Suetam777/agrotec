import { Component, HostListener } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pessoa = {
    foto: '"https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome: 'Pombinha da Silva',
    objetivo: 'Programador de HTML e CSS',
    contato: {
      email: 'mateuschapad33@gmail.com',
      telefone: '(15) 996094967',
      linkedin: 'linkedin.com/seleide',
      github: 'github.com/seleide',
    },
    softskills: [ 
      'comunicação',
      'proatividade',
      'trabalho em grupo',
    ],
    formacao: [
      {
        ano_inicio: '2022',
        ano_fim: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Técnico em Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_fim: '2027',
        instituicao: 'Faculdade de Tecnologia Fatec',
        curso: 'Superior em Análise e Desenvolvimento de Sistemas'
      }
    ],
    projeto: [
      {
        ano: '2023',
        instituicao: 'Ete3c Sales Gomes',
        nome_projeto: 'Etec Portas Abertas',
        descricao: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium dolorem architecto, repellat dolores, maiores, ab qui nihil maxime facere suscipit nesciunt tenetur aperiam. Deleniti facere pariatur tenetur labore iste.',
      }
    ]

  }

  submenuVisible: { [key: string]: boolean } = {};
  isMobile!: boolean;  // Usa o operador de asserção não nulo

  constructor(private menu: MenuController, private platform: Platform) { 
    this.checkIfMobile(); // Ajusta o valor inicial
    // Ouça eventos de redimensionamento para ajustar a visibilidade do menu
    this.platform.resize.subscribe(() => {
      this.checkIfMobile();
    });
  }

  closeMenu() {
    this.menu.close('start');
  }

  toggleSubmenu(submenuId: string) {
    this.submenuVisible[submenuId] = !this.submenuVisible[submenuId];
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    // Verifica se a largura da tela é menor que 768px
    this.isMobile = this.platform.width() < 768;
  }
}
