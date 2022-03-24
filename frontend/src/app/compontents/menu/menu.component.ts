import {AfterContentInit, AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  placeholderText: string = '';
  placeholderTextOptions: string[] = [
    'Czego szukasz?',
    'Zadbaj o swoje ciało',
    'Czas na relaks',
    'Odprężająca kąpiel?',
    'Olejek eteryczny',
    'Olejek z czerwonej pomarańczy',
    'Olejek na przeziębienie',
    'Herbata tymiankowa',
    'Herbata z szafranem',
    'Herbata rozmarynowa',
    'Kosmetyki',
    'Olejki',
    'Kwas Kaprylowy',
    'Ekstrakt z lukrecji',
    'Sól do kąpieli',
    'Berberyna',
    'Tarczyca bajkalska',
    'Bio-Kult',
    'CureSupport',
    'Dary Natury',
    'DR. Mercola',
  ];

  ngAfterContentInit(): void {
    this.test();
  }

  private test(): void {
    this.setPlaceholderText().then(() => this.test());
  }

  private async setPlaceholderText(): Promise<void> {
    const nextPlaceholderText = this.getRandomPlaceholderText();
    await this.moveTextForward(nextPlaceholderText);
    await this.moveTextBackward();
  }

  private async moveTextForward(nextPlaceholderText: string): Promise<void> {
    for (let i = 0; i < nextPlaceholderText.length; i++) {
      this.placeholderText += nextPlaceholderText[i];
      await new Promise(f => setTimeout(f, 130));
    }
    await new Promise(f => setTimeout(f, 4000));
  }

  private async moveTextBackward(): Promise<void> {
    for (let i = this.placeholderText.length; i >= 0; i--) {
      this.placeholderText = this.placeholderText.substring(0, this.placeholderText.length - 1);
      await new Promise(f => setTimeout(f, 70));
    }
  }

  private getRandomPlaceholderText(): string {
    const index = Math. floor(Math.random() * (this.placeholderTextOptions.length + 1));
    return this.placeholderTextOptions[index];
  }
}
