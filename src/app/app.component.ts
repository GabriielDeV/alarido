import { Component, OnInit } from '@angular/core';

interface Document {
  code: string;
  title: string;
  location: string;
  content: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
  searchResults: number = 0;
  filteredDocuments: Document[] = [];
  showLanguageDropdown: boolean = false;
  showBooksDropdown: boolean = false;
  showSearchResults: boolean = false;
  showLoginModal: boolean = false;
  isDarkMode: boolean = false;
  
  documents: Document[] = [
    {
      code: '47-0412',
      title: 'FÉ É A SUBSTÂNCIA',
      location: 'Oakland Califórnia E.U.A.',
      content: [
        '<i class="fas fa-microphone-alt"></i> Estamos recebendo alguns novos dispositivos para gravação.',
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
      content: [
        '<i class="fas fa-microphone-alt"></i> Nesta noite especial, vamos falar sobre um tema muito importante.',
        'A ressurreição é o fundamento da nossa fé. Sem ela, nossa pregação seria vã, nossa fé também seria vã. Mas graças a Deus, temos a certeza desta verdade gloriosa.',
        'Quando pensamos na ressurreição, não estamos falando apenas de um evento histórico, mas de uma realidade viva que afeta cada um de nós hoje. É o poder de Deus manifestado em nossa vida diária.',
        'Paulo declarou em Filipenses que queria conhecer a Cristo, e o poder da sua ressurreição. Não era suficiente para ele apenas saber sobre a ressurreição - ele queria experimentar seu poder.',
        'E esse mesmo poder que levantou Jesus dentre os mortos está disponível para nós hoje. É o mesmo poder que pode transformar vidas, curar corpos doentes, restaurar relacionamentos quebrados.',
        'Pense nisso por um momento: se Deus pôde ressusitar Jesus dentre os mortos, existe algo impossível para Ele? Existe alguma situação em sua vida que seja difícil demais para Deus resolver?',
        'A ressurreição nos dá esperança. Esperança de que a morte não é o fim. Esperança de que nossas lutas atuais não são permanentes. Esperança de um futuro glorioso com Cristo.',
        'Lembro-me de uma história que aconteceu há alguns anos. Um jovem estava desenganado pelos médicos, com câncer em estágio terminal. Mas ele se agarrou a esta verdade: o mesmo poder que ressuscitou Jesus poderia curar seu corpo.',
        'E sabem o que aconteceu? Os médicos não podiam explicar, mas o câncer desapareceu completamente. Este é o poder da ressurreição em ação hoje!',
        'Mas a ressurreição não é apenas sobre cura física. É sobre vida nova em todas as áreas. É sobre esperança onde havia desespero. É sobre alegria onde havia tristeza. É sobre vitória onde havia derrota.',
        'Quando Jesus ressuscitou, Ele não apenas venceu a morte - Ele venceu todo poder do inimigo. E como crentes, somos participantes dessa vitória. Somos mais que vencedores por meio dAquele que nos amou.',
        'A ressurreição também nos lembra que Deus é o Deus do impossível. Quando Maria e Marta viram seu irmão Lázaro morrer, pensaram que era o fim. Mas Jesus mostrou que Ele é a ressurreição e a vida.',
        'E o mesmo acontece em nossas vidas hoje. Talvez você esteja enfrentando uma situação que parece sem esperança. Talvez os médicos tenham dado um diagnóstico negativo. Talvez seu casamento esteja em crise.',
        'Mas lembre-se: o poder da ressurreição ainda está disponível hoje. O mesmo Deus que ressuscitou Jesus dentre os mortos pode trazer vida nova à sua situação.',
        'A ressurreição também nos ensina sobre transformação. O corpo ressuscitado de Jesus era real - os discípulos podiam tocá-lo - mas era também glorificado. E um dia, nós também teremos corpos glorificados.',
        'Mas não precisamos esperar até lá para experimentar transformação. O poder da ressurreição está disponível agora para nos transformar à imagem de Cristo.',
        'Paulo diz que, se o Espírito dAquele que ressuscitou Jesus dentre os mortos habita em nós, Ele também vivificará nossos corpos mortais. Este é um processo contínuo de transformação.',
        'E essa transformação não é apenas individual - é também corporativa. A igreja, como corpo de Cristo, deve manifestar o poder da ressurreição ao mundo.',
        'Quando as pessoas olham para a igreja, elas deveriam ver o poder da ressurreição em ação. Deveriam ver vidas transformadas, relacionamentos restaurados, milagres acontecendo.',
        'Por isso, meus irmãos, não deixem que ninguém os engane dizendo que os dias dos milagres acabaram. O poder da ressurreição é tão real hoje quanto era no primeiro século.',
        'E esse poder não está limitado a um lugar ou a uma pessoa. Está disponível para todos que creem. Está disponível para você agora mesmo.',
        'A questão é: você está pronto para experimentar o poder da ressurreição em sua vida? Está pronto para ver Deus fazer o impossível em sua situação?',
        'Não importa quão difícil seja sua circunstância, lembre-se: o túmulo vazio é nossa garantia de que Deus pode fazer o impossível. A ressurreição é nossa prova de que não existe situação impossível para Deus.'
      ]
    },
    {
      code: '49-0718',
      title: 'O ANJO DE DEUS',
      location: 'São Paulo Brasil',
      content: [
        '<i class="fas fa-microphone-alt"></i> É uma grande alegria estar aqui no Brasil pela primeira vez.',
        'Muitos têm me perguntado sobre o Anjo do Senhor. Como ele aparece, como ele opera. Deixe-me contar-lhes uma história que aconteceu no início do meu ministério.',
        'Era uma noite como esta, quando pela primeira vez vi aquela Luz sobrenatural entrar no quarto. E dela saiu um homem, um ser angelical, que se aproximou e disse: "Não temas, você foi enviado com um dom de cura divina para os povos do mundo."',
        'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
        'Muitos perguntam: "Irmão Branham, como você sabe quando o Anjo está presente?" É uma sensação física real. Sinto uma pressão, uma presença sagrada. E então, algo acontece - o dom começa a operar.',
        'Não é como alguns pensam, que posso curar as pessoas. Não, eu não posso curar ninguém. É Deus quem cura. O Anjo apenas me mostra quem Deus vai curar.',
        'Lembro-me de uma reunião em Louisville, Kentucky. Uma senhora estava na fila de oração, usando um vestido azul. Antes mesmo dela chegar até mim, o Anjo me mostrou que ela sofria de câncer no estômago.',
        'Quando ela se aproximou, eu disse: "Senhora, você tem câncer no estômago." Ela ficou surpresa. "Como você sabe?" E então pude ver toda sua vida diante de mim, como um filme.',
        'Vi quando ela foi ao médico três semanas antes. Vi o diagnóstico. Vi suas lágrimas quando recebeu a notícia. Mas então, vi algo mais - vi ela completamente curada, voltando ao médico que não podia encontrar mais nenhum traço de câncer.',
        'Este é o ministério do Anjo do Senhor. Ele mostra, Ele revela, Ele guia. Mas é sempre para a glória de Jesus Cristo. O Anjo nunca aceita adoração - ele sempre aponta para Jesus.',
        'E sabem, amados, não é o mensageiro que importa, mas a Mensagem. O Anjo é apenas um servo, assim como eu sou um servo. O que importa é Jesus Cristo, o mesmo ontem, hoje e eternamente.',
        'Alguns perguntam: "Por que um Anjo? Por que Deus não fala diretamente?" Bem, se estudarmos a Bíblia, veremos que Deus frequentemente usa anjos como mensageiros.',
        'Foi um anjo que anunciou o nascimento de Jesus a Maria. Foi um anjo que libertou Pedro da prisão. Foi um anjo que deu o Apocalipse a João. Deus não mudou Seu modo de operar.',
        'Mas lembrem-se: o Anjo nunca contradiz a Palavra de Deus. Se algum anjo vier pregando algo diferente do que está na Bíblia, não creiam nele. A Palavra de Deus é nossa autoridade final.',
        'O ministério do Anjo tem um propósito: preparar a Igreja para a vinda de Jesus. Não é para exaltar um homem ou criar uma nova doutrina. É para trazer o povo de volta à Palavra de Deus.',
        'E aqui no Brasil, vejo a mesma fé, a mesma expectativa. Deus não faz acepção de pessoas. O que Ele fez em outros lugares, fará aqui também.',
        'O Anjo me disse: "Se você conseguir fazer com que as pessoas crebam, nada será impossível." A chave é a fé - não em um homem, não em um anjo, mas em Jesus Cristo.',
        'Por isso, quando vocês veem os milagres acontecendo, não olhem para mim. Não olhem nem mesmo para o Anjo. Olhem para Jesus, o autor e consumador da nossa fé.',
        'O Anjo é real, sim. Sua presença é tangível. Mas ele é apenas um servo enviado para nos ajudar a ter mais fé em Jesus. É Jesus quem cura, é Jesus quem salva, é Jesus quem liberta.',
        'E nesta noite, o mesmo Anjo está aqui. A mesma presença sobrenatural que tem guiado este ministério está neste lugar. Não para exaltar um homem, mas para glorificar a Jesus Cristo.'
      ]
    },
    {
      code: '50-0821',
      title: 'O PODER DA PALAVRA',
      location: 'Chicago Illinois E.U.A.',
      content: [
        '<i class="fas fa-microphone-alt"></i> A Palavra de Deus é mais poderosa que qualquer espada de dois gumes.',
        'Quando olhamos para a criação, vemos que tudo veio à existência pela Palavra. "Haja luz", e houve luz. Este mesmo poder criativo está disponível para nós hoje através da Palavra falada.',
        'Muitos de vocês têm me perguntado: "Irmão Branham, como você discerne os pensamentos do coração?" É simplesmente a Palavra de Deus se manifestando, revelando os segredos mais profundos da alma.',
        'A Palavra não apenas revela, mas também cria. Ela tem o poder de transformar vidas, de curar corpos, de restaurar almas. Não é a palavra de um homem, mas a Palavra do Deus vivo operando através de vasos de barro.',
        'Pense nisso: a mesma Palavra que criou os universos está disponível para nós hoje. Não perdeu seu poder. Não diminuiu sua eficácia. É tão poderosa hoje quanto era no princípio.',
        'Quando Jesus estava na terra, Ele demonstrou o poder da Palavra falada. Ele falou com a figueira, e ela secou. Falou com o mar tempestuoso, e ele se acalmou. Falou com os mortos, e eles ressuscitaram.',
        'E Ele nos disse: "As obras que eu faço, vós também as fareis." Não porque temos algum poder especial, mas porque temos acesso à mesma Palavra poderosa.',
        'A Palavra é como uma semente. Quando plantada em solo fértil - um coração crente - ela produzirá uma colheita. Mas deve ser plantada. Deve ser falada. Deve ser confessada.',
        'Lembro-me de um caso em Phoenix. Uma senhora veio à reunião, surda de um ouvido há 40 anos. Quando a Palavra foi falada, algo aconteceu. A Palavra criou um novo tímpano. Os médicos não podiam explicar.',
        'Veja, a Palavra tem poder criativo. Pode criar o que não existe. Pode restaurar o que foi destruído. Pode trazer vida onde há morte.',
        'Mas muitos de nós não entendemos o poder que temos em nossas bocas. A Bíblia diz que a morte e a vida estão no poder da língua. O que falamos determina o que colhemos.',
        'Se falamos dúvida, colhemos dúvida. Se falamos fé, colhemos fé. Se falamos doença, colhemos doença. Se falamos cura, colhemos cura.',
        'É por isso que devemos ser cuidadosos com o que falamos. Nossas palavras devem estar alinhadas com a Palavra de Deus. Não podemos falar uma coisa e crer em outra.',
        'A Palavra de Deus é nossa autoridade. É nossa base. É nossa fundação. Quando falamos a Palavra, estamos liberando poder criativo no reino espiritual.',
        'Mas não basta apenas falar a Palavra - devemos crer nela. Jesus disse: "Tudo é possível ao que crê." A Palavra e a fé trabalham juntas.',
        'E quando a Palavra é falada com fé, milagres acontecem. Não porque somos especiais, mas porque a Palavra é especial. Não porque temos poder, mas porque a Palavra tem poder.',
        'Por isso, meus irmãos, alimentem-se da Palavra. Meditem nela dia e noite. Deixem-na saturar seu espírito. Quanto mais da Palavra tivermos em nós, mais poder teremos disponível.',
        'E não apenas leiam a Palavra - falem-na. Confessem-na. Declarem-na. Há poder na Palavra falada. Há poder na confissão de fé.',
        'Vejo muitos aqui com necessidades, com enfermidades, com problemas. Mas a Palavra é suficiente. Ela é o remédio para toda doença, a solução para todo problema, a resposta para toda pergunta.',
        'Deixe a Palavra habitar ricamente em seu coração. Medite nela dia e noite. Declare-a com sua boca. Veja o poder criativo de Deus começar a operar em sua vida.',
        'E lembre-se: a Palavra nunca falha. Pode parecer que não está funcionando, mas continue crendo, continue confessando. A Palavra sempre cumpre o propósito para o qual foi enviada.',
        'Esta é a hora de voltarmos à Palavra. Esta é a hora de descobrirmos novamente o poder da Palavra falada. Esta é a hora de vermos Deus confirmar Sua Palavra com sinais e maravilhas seguindo.'
      ]
    }
  ];

  currentDocument: Document = this.documents[0];

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

  toggleLanguageDropdown(): void {
    this.showLanguageDropdown = !this.showLanguageDropdown;
    if (this.showLanguageDropdown) {
      this.showBooksDropdown = false;
      this.showSearchResults = false;
    }
  }

  toggleBooksDropdown(): void {
    this.showBooksDropdown = !this.showBooksDropdown;
    if (this.showBooksDropdown) {
      this.showLanguageDropdown = false;
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
}
