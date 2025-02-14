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
        'Estamos recebendo alguns novos dispositivos para gravação. Vamos começar nossa reunião nesta noite falando sobre fé.',
        'A fé é a substância das coisas que se esperam, e a evidência das coisas que não se veem. Esta é uma das mais profundas definições de fé que encontramos nas Escrituras.',
        'Quando falamos de fé, precisamos entender que não é apenas um conceito abstrato. É uma força real, uma substância tangível no reino espiritual.',
        'Muitas pessoas me perguntam: "Irmão, como posso aumentar minha fé?" A resposta é simples: a fé vem pelo ouvir, e ouvir a Palavra de Deus.',
        'Lembro-me de um caso que aconteceu há algumas semanas. Uma senhora veio à reunião, ela mal podia andar. Os médicos haviam dito que ela precisaria de uma cirurgia.',
        'Mas naquela noite, algo extraordinário aconteceu. Quando a Palavra foi pregada, sua fé se elevou. Ela não precisou que ninguém orasse por ela.',
        'Ela simplesmente se levantou e começou a andar normalmente. Por quê? Porque a fé é a substância. Ela torna real aquilo que esperamos.',
        'Vejam, amados, não precisamos ver para crer. Na verdade, primeiro cremos, depois vemos. Esta é a ordem divina.',
        'Abraão é um exemplo perfeito disso. Deus lhe prometeu um filho quando ele já era muito idoso. Humanamente falando, era impossível.',
        'Mas a Bíblia diz que ele não duvidou da promessa de Deus por incredulidade. Antes, foi fortificado na fé, dando glória a Deus.',
        'E não foi apenas Abraão. Pense em Moisés diante do Mar Vermelho. Em Josué marchando ao redor de Jericó. Em Davi enfrentando Golias.',
        'Todos eles tinham algo em comum: eles creram antes de ver. Eles agiram baseados na Palavra de Deus, não nas circunstâncias.',
        'Hoje, muitos de vocês estão enfrentando situações impossíveis. Os médicos podem ter dado um diagnóstico negativo.',
        'Talvez você esteja enfrentando problemas financeiros, problemas familiares, ou lutas espirituais.',
        'Mas quero lhe dizer algo: a mesma fé que operou milagres no passado ainda está disponível hoje.',
        'Deus não mudou. Jesus Cristo é o mesmo ontem, hoje e eternamente. O que mudou foi nossa expectativa, nossa fé.',
        'Precisamos voltar à fé simples das crianças. Aquela fé que simplesmente acredita porque Deus disse.',
        'Não complique o que Deus simplificou. A fé não é algo místico ou complicado. É simplesmente confiar na Palavra de Deus.',
        'Quando você pega um copo d\'água, você não questiona se a cadeira vai suportar seu peso. Você simplesmente senta.',
        'É assim que a fé deveria ser. Natural, simples, sem questionamentos. Se Deus disse, está dito.',
        'E lembre-se: a fé sem obras é morta. Não basta dizer que crê. É preciso agir de acordo com sua fé.',
        'Se você crê que Deus vai lhe dar a vitória, aja como vitorioso. Se crê na cura, aja como curado.',
        'A fé é como um músculo. Quanto mais você exercita, mais forte ela fica. Comece com pequenos atos de fé.',
        'Agradeça antes de ver a resposta. Louve no meio da tempestade. Declare vitória em meio à batalha.',
        'E acima de tudo, mantenha seus olhos fixos em Jesus, o autor e consumador da nossa fé.',
        'Ele é o exemplo perfeito de alguém que viveu pela fé. Ele viu além da cruz, viu a glória que estava por vir.',
        'E é isso que a fé faz: ela nos permite ver além das circunstâncias presentes, ver o final glorioso que Deus preparou.',
        'Não desista. Não deixe que as circunstâncias determinem sua fé. Deixe que sua fé determine as circunstâncias.',
        'A fé é a vitória que vence o mundo. E esta vitória está disponível para todos que creem.',
        'Vamos orar...'
      ]
    },
    {
      code: '48-0501',
      title: 'A RESSURREIÇÃO',
      location: 'Los Angeles Califórnia E.U.A.',
      content: [
        'Nesta noite especial, vamos falar sobre um tema muito importante: a ressurreição.',
        'A ressurreição não é apenas um evento histórico. É uma realidade presente que afeta cada um de nós.',
        'Quando Jesus ressuscitou, Ele não apenas venceu a morte por Si mesmo, mas também por todos nós.',
        'Paulo disse: "Se Cristo não ressuscitou, vã é a nossa pregação, e vã é também a vossa fé."',
        'A ressurreição é o fundamento da nossa fé. É a prova definitiva de que Jesus é quem Ele disse que era.',
        'Pense nisso: todos os outros líderes religiosos morreram e permaneceram mortos. Seus túmulos ainda podem ser visitados.',
        'Mas o túmulo de Jesus está vazio! Ele ressuscitou, como havia prometido.',
        'E não apenas isso, Ele foi visto por mais de 500 pessoas após Sua ressurreição.',
        'Os discípulos foram transformados de homens medrosos em pregadores corajosos.',
        'Por quê? Porque eles viram o Cristo ressurreto. Eles tocaram em Suas mãos e Seus pés.',
        'E hoje, dois mil anos depois, ainda experimentamos o poder da ressurreição.',
        'Cada vez que um pecador se converte, é o poder da ressurreição operando.',
        'Cada vez que um doente é curado, é o poder da ressurreição manifestado.',
        'Porque Ele vive, nós também vivemos. Esta é a mensagem da ressurreição.',
        'E um dia, este mesmo poder que ressuscitou a Jesus dentre os mortos vivificará também nossos corpos mortais.',
        'Que esperança gloriosa! Que certeza bendita!',
        'Por isso podemos cantar com convicção: "Porque Ele vive, posso crer no amanhã!"'
      ]
    },
    {
      code: '49-0718',
      title: 'O ANJO DE DEUS',
      location: 'São Paulo Brasil',
      content: [
        'É uma grande alegria estar aqui no Brasil pela primeira vez. Que recepção maravilhosa!',
        'Muitos têm me perguntado sobre o Anjo do Senhor. Como ele aparece, como ele opera.',
        'Deixe-me contar-lhes como tudo começou. Era uma noite tranquila em 1946...',
        'Eu estava em meu quarto, orando, quando uma Luz sobrenatural encheu o local.',
        'Dela saiu um homem, um ser angelical, que se aproximou e disse palavras que nunca esquecerei:',
        '"Não temas. Foste enviado com um dom de cura divina para os povos do mundo."',
        'Desde aquele dia, este Anjo tem me acompanhado em cada reunião.',
        'Ele está aqui agora mesmo, movendo-se entre vocês.',
        'Alguns perguntam: "Irmão Branham, como você sabe quando ele está presente?"',
        'É como uma sensação física. Posso sentir sua presença.',
        'E quando ele se aproxima, algo acontece. O sobrenatural se manifesta.',
        'Não é por mim, entendam bem. Eu sou apenas um homem, um pecador salvo pela graça.',
        'Mas este Anjo representa a presença de Deus, a comissão divina.',
        'E onde ele está, milagres acontecem, vidas são transformadas.',
        'Vejam o que está acontecendo aqui no Brasil. Milhares sendo salvos e curados.',
        'Este é apenas o começo. Deus tem grandes planos para esta nação.',
        'O avivamento que começou aqui se espalhará por toda a América do Sul.',
        'Mantenham seus corações abertos. Creiam no sobrenatural.',
        'Deus ainda é Deus. Ele não mudou. Seus anjos ainda ministram hoje.',
        'E enquanto houver um Deus no céu, e pessoas na terra que creiam Nele, veremos Sua glória manifestada.'
      ]
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
