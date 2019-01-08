import { TestBed } from '@angular/core/testing';

import { MessagesWorkspaceDemoService } from './messages-workspace-demo.service';

describe('MessagesWorkspaceDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesWorkspaceDemoService = TestBed.get(MessagesWorkspaceDemoService);
    expect(service).toBeTruthy();
  });
});
