import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSituacaoComponent } from './dialog-situacao.component';

describe('DialogSituacaoComponent', () => {
  let component: DialogSituacaoComponent;
  let fixture: ComponentFixture<DialogSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
