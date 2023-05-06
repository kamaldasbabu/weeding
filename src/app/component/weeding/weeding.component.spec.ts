import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedingComponent } from './weeding.component';

describe('WeedingComponent', () => {
  let component: WeedingComponent;
  let fixture: ComponentFixture<WeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeedingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
