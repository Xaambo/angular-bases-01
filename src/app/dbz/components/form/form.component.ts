import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '-1',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '-1',
      name: '',
      power: 0,
    };
  }
}
