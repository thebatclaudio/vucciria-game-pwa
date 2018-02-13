import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  @ViewChild('playerInput') playerInput: ElementRef;

  players: User[] = [];

  cards;

  newPlayer: User = {
    id: 0,
    name: ''
  };

  formOpen: boolean = false;
  play: boolean = false;

  currentPlayerIndex: number = 0;
  currentCardIndex: number = 0;

  currentPlayer: User;
  currentCard;

  constructor() { 
    this.cards = [
      {
        name: "Mossa",
        info: "Inventa una mossa che ognuno dovrÃ  ripetere ogni volta che dovrÃ  bere. Se sono giÃ  presenti altre mosse devono essere ripetute tutte sia ora che quando si beve! Chi dimentica la mossa beve due volte, ma chi non sta attento e accusa qualcuno di non aver fatto la mossa quando invece Ã¨ stata fatta beve per calunnia!", slug: "mossa"
      }, { name: "Bevi", info: "Non c'Ã¨ nulla da spiegare!", slug: "bevi" }, { name: "Bevi o offri", info: "Non c'Ã¨ nulla da spiegare", slug: "bevi-offri" }, { name: "I tre dell'ave maria", info: "Bevi tu e chi sta seduto alla tua destra e alla tua sinistra!", slug: "tre-ave-maria" }, { name: "Tu e to cumpari", info: "Invita qualcuno a bere con te", slug: "tu-to-cumpari" }, { name: "Jolly", info: "Che culo, hai trovato un jolly. Quando vuoi usalo per non bere o per andare in bagno, ma ricorda che Ã¨ monouso.", slug: "jolly" }, { name: "PipÃ¬", info: "Quando vuoi puoi andare in bagno.", slug: "pipi" }, { name: "Sfida", info: "Sfida qualcuno a pari o dispari, carta forbice e pietra o qualunque altra sfida. Chi perde beve!", slug: "sfida" }, { name: "7 Bum", info: 'Inizia a giocare a 7 Bum. Si inizia a contare da 1 ed ognuno deve dire il numero successivo, sostituendo ai multipli di 7 e ai numeri che finiscono con 7 la parola "bum". Chi sbaglia beve!', slug: "7-bum" }, { name: "21", info: "21 Ã¨ un gioco che consiste nel contare in gruppo fino a 21. Ognuno puÃ² dire uno o due numeri, ma quando vengono detti due numeri il giro inverte il suo senso. Chi Ã¨ costretto a dire 21 beve!", slug: "21" }, { name: "Storia", info: "Ognuno dice una parola ricordando in ordine tutte le parole dette precedentemente per formare una frase. Chi sbaglia la frase beve!", slug: "storia" }, {
        name: "Zing Boing", info: 'Zing Boing Ã¨ un gioco di gruppo che consiste nel dire "zing" o "boing" in ordine orario o antiorario. Dicendo zing il giro continua normalmente, dicendo boing si inverte il senso del giro. Chi sbaglia beve!',
        slug: "zing-boing"
      }];
  }

  ngOnInit() {
  }

  insertPlayer() {
    this.formOpen = true;

    setTimeout(() => {
      this.playerInput.nativeElement.focus();
    }, 0);
  }

  savePlayer() {
    this.formOpen = false;

    this.newPlayer.name = '';

    this.players.push({
      id: 1,
      name: this.playerInput.nativeElement.value
    });
  }

  startGame() {
    if(this.players.length >= 2) {
      this.nextCard();
      this.play = true;
    }
  }

  nextCard() {
    if(this.currentPlayerIndex == this.players.length) {
      this.currentPlayerIndex = 0;
    }

    console.log(this.cards);
    this.currentCardIndex = Math.floor((Math.random() * this.cards.length));
    console.log(this.currentCardIndex);
    this.currentCard = this.cards[this.currentCardIndex];

    this.currentPlayer = this.players[this.currentPlayerIndex];

    this.currentPlayerIndex++;
  }

}
