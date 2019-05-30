import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFreelancerComponent } from './create-freelancer.component';

describe('CreateFreelancerComponent', () => {
  let component: CreateFreelancerComponent;
  let fixture: ComponentFixture<CreateFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
