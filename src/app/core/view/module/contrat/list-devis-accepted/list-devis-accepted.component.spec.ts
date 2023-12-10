import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevisAcceptedComponent } from './list-devis-accepted.component';

describe('ListDevisAcceptedComponent', () => {
  let component: ListDevisAcceptedComponent;
  let fixture: ComponentFixture<ListDevisAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDevisAcceptedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDevisAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
