import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarProjetoComponent } from './dialog-editar-projeto.component';

describe('DialogEditarProjetoComponent', () => {
  let component: DialogEditarProjetoComponent;
  let fixture: ComponentFixture<DialogEditarProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarProjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
