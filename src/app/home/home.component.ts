import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Document {
  code: string;
  title: string;
  location: string;
  content: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';
  searchResults: number = 0;
  filteredDocuments: Document[] = [];
  showBooksDropdown: boolean = false;
  showSearchResults: boolean = false;
  showLoginModal: boolean = false;
  isDarkMode: boolean = false;
  
  // Propriedades para login
  email: string = '';
  password: string = '';
  loginError: string = '';

  documents: Document[] = [
    {
      code: '47-0412',
      title: 'FÉ É A SUBSTÂNCIA',
      location: 'Oakland Califórnia E.U.A.',
      content: [
        'Estamos recebendo alguns novos dispositivos para gravação.',
        'Mal sabemos cada noite onde vamos estar. Isso é apenas, eu acho que... sobre a terceira mudança nas últimas quatro noites. Então temos outra mudança, eu acho, amanhã à noite. Então isso é o que torna tudo muito ruim, apenas mudando de lugar para lugar, então você dificilmente... É como um novo lugar toda noite, e—e torna tudo muito difícil.',
        'Eu confio que algum dia quando eu voltar novamente a Oakland, bem, talvez possamos conseguir algo como o auditório aqui por uma semana ou duas. É quando podemos ter um verdadeiro avivamento e uma verdadeira reunião. Você não acredita nisso? Sim, eu acredito que poderíamos também.',
        'A fé é a substância das coisas que se esperam, e a evidência das coisas que não se veem. Através da fé, entendemos que os mundos foram criados pela palavra de Deus, de maneira que aquilo que se vê não foi feito do que é visível.',
        'Quando falamos de fé, precisamos entender que não é apenas um conceito abstrato. É uma força real, uma substância tangível no reino espiritual. É através da fé que movemos montanhas, não através de nossa própria força ou capacidade.',
        'Veja, amados, a fé não é algo que podemos fabricar. Não é algo que podemos criar por nós mesmos. É um dom de Deus, uma graça especial que nos é concedida para crermos no impossível.',
        'E quando olhamos para as Escrituras, vemos exemplos após exemplos de homens e mulheres que, através da fé, realizaram o impossível. Abraão, contra toda esperança, em esperança creu. Moisés enfrentou o mar Vermelho com nada além da fé em sua mão.',
        'Hoje, estamos enfrentando nossos próprios mares Vermelhos. Temos nossas próprias montanhas para mover. E a pergunta não é se Deus pode fazer isso - sabemos que Ele pode. A pergunta é: temos fé para crer que Ele fará?',
        'Lembro-me de um caso recente em uma de nossas reuniões. Uma senhora veio, trazida em uma maca. Os médicos haviam dito que ela nunca mais andaria. Mas ela tinha algo que os médicos não podiam medir - ela tinha fé.',
        'E ali, diante de milhares de pessoas, vimos o poder de Deus em ação. Não foi nada que eu fiz. Foi a fé dela encontrando a graça de Deus. E naquele momento, o impossível aconteceu.',
        'É por isso que digo a vocês: não olhem para as circunstâncias. Não olhem para o que os outros estão dizendo. Olhem para a Palavra de Deus. Porque é nela que encontramos a base para nossa fé.',
        'A fé vem pelo ouvir, e o ouvir pela Palavra de Deus. Quanto mais nos alimentamos da Palavra, mais nossa fé cresce. É como uma semente que, quando plantada no solo fértil de um coração crente, cresce e se torna uma árvore poderosa.',
        'E não é apenas para cura física. A fé opera em todas as áreas de nossa vida. Seja na família, no trabalho, em nossas finanças - Deus quer que exercitemos nossa fé em todas as áreas.',
        'Mas lembrem-se: a verdadeira fé sempre vem acompanhada de ação. Tiago nos diz que a fé sem obras é morta. Não podemos simplesmente dizer que temos fé e não agir de acordo com ela.',
        'É como aquele homem que orou pedindo coragem. E Deus respondeu: "Eu não te darei coragem, mas te darei oportunidades para ser corajoso." Da mesma forma, Deus nos dá oportunidades para exercitar nossa fé.',
        'E cada vez que exercitamos nossa fé, ela se torna mais forte. Cada testemunho de uma oração respondida se torna uma âncora para nossa alma, nos lembrando que Deus é fiel.',
        'Por isso, meus irmãos, não desanimem quando enfrentarem provações. Tiago nos diz que a prova da nossa fé produz perseverança. E a perseverança deve ter sua obra completa, para que sejamos perfeitos e completos, não faltando em coisa alguma.',
        'Estamos vivendo em tempos difíceis, é verdade. Mas são nesses tempos que nossa fé mais cresce. É no vale que aprendemos a confiar mais em Deus. É na fornalha que o ouro é purificado.',
        'E lembrem-se: a mesma fé que moveu montanhas no passado ainda está disponível hoje. O mesmo Deus que abriu o mar Vermelho ainda está no trono. E Ele está procurando por pessoas que ousarão crer nEle para o impossível.'
      ]
    },
    {
      code: '48-0501',
      title: 'A RESSURREIÇÃO',
      location: 'Los Angeles Califórnia E.U.A.',
      content: ['Nesta noite especial, vamos falar sobre um tema muito importante...']
    },
    {
      code: '49-0718',
      title: 'O ANJO DE DEUS',
      location: 'São Paulo Brasil',
      content: ['É uma grande alegria estar aqui no Brasil pela primeira vez...']
    }
  ];

  currentDocument: Document = this.documents[0];

  constructor(private router: Router) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
    this.filteredDocuments = [...this.documents];
  }

  searchDocuments(): void {
    if (!this.searchQuery.trim()) {
      this.searchResults = 0;
      this.filteredDocuments = [...this.documents];
      this.showSearchResults = false;
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredDocuments = this.documents.filter(doc => {
      const titleMatch = doc.title.toLowerCase().includes(query);
      const codeMatch = doc.code.toLowerCase().includes(query);
      const locationMatch = doc.location.toLowerCase().includes(query);
      const contentMatch = doc.content.some(paragraph => 
        paragraph.toLowerCase().includes(query)
      );

      return titleMatch || codeMatch || locationMatch || contentMatch;
    });

    this.searchResults = this.filteredDocuments.length;
    this.showSearchResults = true;
  }

  onSearchInput(): void {
    this.searchDocuments();
  }

  selectSearchResult(document: Document): void {
    this.currentDocument = document;
    this.showSearchResults = false;
    this.searchQuery = '';
    this.searchResults = 0;
  }

  toggleBooksDropdown(): void {
    this.showBooksDropdown = !this.showBooksDropdown;
    if (this.showBooksDropdown) {
      this.showSearchResults = false;
    }
  }

  selectBook(document: Document): void {
    this.currentDocument = document;
    this.showBooksDropdown = false;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleLoginModal(): void {
    this.showLoginModal = !this.showLoginModal;
    if (this.showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  onModalClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.toggleLoginModal();
    }
  }

  onLogin(event: Event) {
    event.preventDefault();
    
    if (this.email === 'admin@admin.com' && this.password === '123456') {
      this.loginError = '';
      this.showLoginModal = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Email ou senha inválidos';
    }
  }
}
