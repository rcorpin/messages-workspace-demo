import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesWorkspaceDemoComponent } from './messages-workspace-demo.component';

describe('MessagesWorkspaceDemoComponent', () => {
  let component: MessagesWorkspaceDemoComponent;
  let fixture: ComponentFixture<MessagesWorkspaceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesWorkspaceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesWorkspaceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
