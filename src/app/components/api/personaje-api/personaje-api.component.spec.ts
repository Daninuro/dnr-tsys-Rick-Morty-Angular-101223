import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeApiComponent } from './personaje-api.component';

describe('PersonajeApiComponent', () => {
  let component: PersonajeApiComponent;
  let fixture: ComponentFixture<PersonajeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
