import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjetosComponent } from './dialog-projetos.component';

describe('DialogProjetosComponent', () => {
  let component: DialogProjetosComponent;
  let fixture: ComponentFixture<DialogProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
