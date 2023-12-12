import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesrandomComponent } from './personajesrandom.component';

describe('PersonajesrandomComponent', () => {
  let component: PersonajesrandomComponent;
  let fixture: ComponentFixture<PersonajesrandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesrandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajesrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
