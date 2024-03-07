import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreConfigurationComponent } from './pre-configuration.component';

describe('PreConfigurationComponent', () => {
  let component: PreConfigurationComponent;
  let fixture: ComponentFixture<PreConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
