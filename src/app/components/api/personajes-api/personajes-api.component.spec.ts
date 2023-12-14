import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesApiComponent } from './personajes-api.component';

describe('PersonajesApiComponent', () => {
  let component: PersonajesApiComponent;
  let fixture: ComponentFixture<PersonajesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
