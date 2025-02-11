import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Document {
  code: string;
  title: string;
  location: string;
  content: string[];
  date?: string;
  saved?: boolean;
  highlights?: Highlight[];
}

interface Highlight {
  text: string;
  color: string;
  paragraph: number;
  startOffset: number;
  endOffset: number;
}

interface HighlightColor {
  name: string;
  class: string;
  bgColor: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  documents: Document[] = [];
  savedDocuments: Document[] = [];
  isDarkMode: boolean = false;
  showReadingView: boolean = false;
  currentDocument: Document | null = null;
  showSaveConfirmation: boolean = false;
  saveConfirmationMessage: string = '';
  isLoading: boolean = true;
  searchQuery: string = '';
  filteredDocuments: Document[] = [];

  isHighlightMenuVisible: boolean = false;
  highlightMenuPosition = { x: 0, y: 0 };
  selectedRange: Range | null = null;
  selectedParagraphIndex: number = -1;

  highlightColors: HighlightColor[] = [
    { name: 'Amarelo', class: 'highlight-yellow', bgColor: 'rgba(255, 255, 0, 0.3)' },
    { name: 'Verde', class: 'highlight-green', bgColor: 'rgba(0, 255, 0, 0.2)' },
    { name: 'Azul', class: 'highlight-blue', bgColor: 'rgba(0, 191, 255, 0.2)' },
    { name: 'Rosa', class: 'highlight-pink', bgColor: 'rgba(255, 182, 193, 0.3)' }
  ];

  constructor(private router: Router) {
    // Inicializa os documentos no construtor
    this.documents = [
      {
        code: '47-0412',
        title: 'FÉ É A SUBSTÂNCIA',
        location: 'Oakland Califórnia E.U.A.',
        content: [
          '<i class="fas fa-microphone-alt"></i> Estamos recebendo alguns novos dispositivos para gravação.',
          'Mal sabemos cada noite onde vamos estar. Isso é apenas, eu acho que... sobre a terceira mudança nas últimas quatro noites. Então temos outra mudança, eu acho, amanhã à noite. Então isso é o que torna tudo muito ruim, apenas mudando de lugar para lugar, então você dificilmente... É como um novo lugar toda noite, e—e torna tudo muito difícil.',
          'Eu confio que algum dia quando eu voltar novamente a Oakland, bem, talvez possamos conseguir algo como o auditório aqui por uma semana ou duas. É quando podemos ter um verdadeiro avivamento e uma verdadeira reunião. Você não acredita nisso? Sim, eu acredito que poderíamos também.',
          'A fé é a substância das coisas que se esperam, e a evidência das coisas que não se veem. Através da fé, entendemos que os mundos foram criados pela palavra de Deus, de maneira que aquilo que se vê não foi feito do que é visível.'
        ],
        date: '12/04/1947',
        saved: false
      },
      {
        code: '48-0501',
        title: 'A RESSURREIÇÃO',
        location: 'Los Angeles Califórnia E.U.A.',
        content: [
          '<i class="fas fa-microphone-alt"></i> Nesta noite especial, vamos falar sobre um tema muito importante.',
          'A ressurreição é o fundamento da nossa fé. Sem ela, nossa pregação seria vã, nossa fé também seria vã. Mas graças a Deus, temos a certeza desta verdade gloriosa.',
          'Quando pensamos na ressurreição, não estamos falando apenas de um evento histórico, mas de uma realidade viva que afeta cada um de nós hoje. É o poder de Deus manifestado em nossa vida diária.',
          'Paulo declarou em Filipenses que queria conhecer a Cristo, e o poder da sua ressurreição. Não era suficiente para ele apenas saber sobre a ressurreição - ele queria experimentar seu poder.'
        ],
        date: '01/05/1948',
        saved: false
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
           'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
            'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',

             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',
             'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.',

              'Desde aquele dia, este Anjo tem me acompanhado em cada reunião, em cada momento de oração. Ele está aqui agora mesmo, movendo-se entre vocês, tocando aqueles que têm fé.'

        ],
        date: '18/07/1949',
        saved: true
      }
    ];
    this.filteredDocuments = [...this.documents];
  }

  ngOnInit() {
    // Simula carregamento
    this.isLoading = true;
    setTimeout(() => {
      // Carrega o tema
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
      
      // Carrega as mensagens salvas do localStorage
      const savedDocs = localStorage.getItem('savedDocuments');
      if (savedDocs) {
        const savedCodes = JSON.parse(savedDocs) as string[];
        this.documents = this.documents.map(doc => ({
          ...doc,
          saved: savedCodes.includes(doc.code)
        }));
      }
      
      // Atualiza a lista de documentos salvos e filtrados
      this.updateSavedDocuments();
      this.filteredDocuments = [...this.documents];
      
      this.isLoading = false;
      this.loadHighlights();
    }, 1000);
  }

  toggleSave(document: Document, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    
    document.saved = !document.saved;
    this.updateSavedDocuments();
    
    // Mostra mensagem de confirmação
    this.showSaveConfirmation = true;
    this.saveConfirmationMessage = document.saved 
      ? 'Mensagem salva para ler depois!'
      : 'Mensagem removida das leituras salvas';
    
    // Esconde a mensagem após 2 segundos
    setTimeout(() => {
      this.showSaveConfirmation = false;
    }, 2000);
  }

  private updateSavedDocuments() {
    this.savedDocuments = this.documents.filter(doc => doc.saved);
    
    // Salva no localStorage
    const savedCodes = this.savedDocuments.map(doc => doc.code);
    localStorage.setItem('savedDocuments', JSON.stringify(savedCodes));
  }

  openDocument(document: Document) {
    this.currentDocument = document;
    this.showReadingView = true;
    window.document.body.style.overflow = 'hidden';
  }

  closeReadingView() {
    this.showReadingView = false;
    this.currentDocument = null;
    window.document.body.style.overflow = 'auto';
  }

  logout() {
    localStorage.removeItem('savedDocuments');
    this.router.navigate(['/']);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Função de pesquisa atualizada
  onSearch(): void {
    if (!this.searchQuery?.trim()) {
      this.filteredDocuments = [...this.documents];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredDocuments = this.documents.filter(doc => 
      doc.title.toLowerCase().includes(query) ||
      doc.code.toLowerCase().includes(query) ||
      doc.location.toLowerCase().includes(query) ||
      doc.content.some(p => p.toLowerCase().includes(query))
    );
  }

  // Atualiza a pesquisa quando o input muda
  onSearchInput(): void {
    this.onSearch();
  }

  // Compartilhar documento
  shareDocument(doc: Document, event: Event): void {
    event.stopPropagation();
    // Implementar lógica de compartilhamento
    console.log('Compartilhando documento:', doc.title);
  }

  // Imprimir documento
  printDocument(doc: Document, event: Event): void {
    event.stopPropagation();
    window.print();
  }

  onTextSelection(event: MouseEvent, paragraphIndex: number) {
    const selection = window.getSelection();
    
    if (!selection || selection.isCollapsed || !this.currentDocument) {
      this.isHighlightMenuVisible = false;
      return;
    }

    const text = selection.toString().trim();
    if (!text) {
      this.isHighlightMenuVisible = false;
      return;
    }

    this.selectedRange = selection.getRangeAt(0);
    this.selectedParagraphIndex = paragraphIndex;

    // Posiciona o menu acima da seleção
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    this.highlightMenuPosition = {
      x: rect.left + (rect.width / 2),
      y: rect.top - 45 + window.scrollY
    };
    
    this.isHighlightMenuVisible = true;
  }

  addHighlight(colorClass: string) {
    if (!this.selectedRange || this.selectedParagraphIndex === -1 || !this.currentDocument) return;

    try {
      const span = document.createElement('span');
      span.className = colorClass;
      span.style.backgroundColor = this.highlightColors.find(c => c.class === colorClass)?.bgColor || '';
      
      // Aplica a marcação
      this.selectedRange.surroundContents(span);

      // Salva a marcação
      if (!this.currentDocument.highlights) {
        this.currentDocument.highlights = [];
      }

      this.currentDocument.highlights.push({
        text: span.textContent || '',
        color: colorClass,
        paragraph: this.selectedParagraphIndex,
        startOffset: this.selectedRange.startOffset,
        endOffset: this.selectedRange.endOffset
      });

      // Limpa a seleção e esconde o menu
      window.getSelection()?.removeAllRanges();
      this.isHighlightMenuVisible = false;

      // Salva no localStorage
      this.saveHighlights();

      // Mostra confirmação
      this.showSaveConfirmation = true;
      this.saveConfirmationMessage = 'Texto marcado com sucesso!';
      setTimeout(() => {
        this.showSaveConfirmation = false;
      }, 2000);
    } catch (error) {
      console.error('Erro ao adicionar marcação:', error);
    }
  }

  removeHighlight() {
    if (!this.selectedRange || !this.currentDocument) return;

    try {
      const span = this.findParentHighlight(this.selectedRange.commonAncestorContainer);
      if (span) {
        // Remove a marcação do DOM
        const text = span.textContent;
        const parent = span.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(text || ''), span);
          parent.normalize(); // Combina nós de texto adjacentes
        }

        // Remove a marcação do array de highlights
        if (this.currentDocument.highlights) {
          this.currentDocument.highlights = this.currentDocument.highlights.filter(h => 
            h.text !== text || h.paragraph !== this.selectedParagraphIndex
          );
        }

        // Salva as alterações
        this.saveHighlights();
      }

      // Limpa a seleção e esconde o menu
      window.getSelection()?.removeAllRanges();
      this.isHighlightMenuVisible = false;
    } catch (error) {
      console.error('Erro ao remover marcação:', error);
    }
  }

  private findParentHighlight(node: Node): HTMLElement | null {
    let current: Node | null = node;
    while (current && current.nodeType !== Node.ELEMENT_NODE) {
      current = current.parentNode;
    }
    
    if (current && current instanceof HTMLElement) {
      const element = current as HTMLElement;
      if (this.highlightColors.some(color => element.classList.contains(color.class))) {
        return element;
      }
    }
    return null;
  }

  getProcessedContent(paragraph: string, index: number): string {
    if (!this.currentDocument?.highlights) return paragraph;

    try {
      let result = paragraph;
      const highlightsForParagraph = this.currentDocument.highlights
        .filter(h => h.paragraph === index && h.text && h.text.length > 0)
        .sort((a, b) => b.text.length - a.text.length);

      highlightsForParagraph.forEach(highlight => {
        const span = `<span class="${highlight.color}">${highlight.text}</span>`;
        result = result.replace(new RegExp(this.escapeRegExp(highlight.text), 'g'), span);
      });

      return result;
    } catch (error) {
      console.error('Erro ao processar conteúdo:', error);
      return paragraph;
    }
  }

  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private saveHighlights() {
    if (!this.currentDocument) return;
    
    const highlightsMap = JSON.parse(localStorage.getItem('documentHighlights') || '{}');
    highlightsMap[this.currentDocument.code] = this.currentDocument.highlights || [];
    localStorage.setItem('documentHighlights', JSON.stringify(highlightsMap));
  }

  private loadHighlights() {
    const highlightsMap = JSON.parse(localStorage.getItem('documentHighlights') || '{}');
    
    this.documents.forEach(doc => {
      const highlights = highlightsMap[doc.code] || [];
      doc.highlights = highlights;
      
      // Aplica as marcações salvas quando o documento é aberto
      if (doc === this.currentDocument && highlights.length > 0) {
        setTimeout(() => this.applyHighlights(doc), 100);
      }
    });
  }

  private applyHighlights(document: Document) {
    if (!document.highlights) return;

    document.highlights.forEach(highlight => {
      const paragraph = document.content[highlight.paragraph];
      if (!paragraph) return;

      const paragraphElement = window.document.getElementById(`paragraph-${highlight.paragraph}`);
      if (!paragraphElement) return;

      const textNode = Array.from(paragraphElement.childNodes)
        .find(node => node.nodeType === Node.TEXT_NODE && (node as Text).textContent?.includes(highlight.text));

      if (textNode) {
        const range = window.document.createRange();
        range.setStart(textNode, highlight.startOffset);
        range.setEnd(textNode, highlight.endOffset);

        const span = window.document.createElement('span');
        span.className = highlight.color;
        span.style.backgroundColor = this.highlightColors.find(c => c.class === highlight.color)?.bgColor || '';
        
        range.surroundContents(span);
      }
    });
  }
}
