import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxComponent } from './mapbox.component';

describe('MapboxComponentComponent', () => {
  let component: MapboxComponent;
  let fixture: ComponentFixture<MapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
