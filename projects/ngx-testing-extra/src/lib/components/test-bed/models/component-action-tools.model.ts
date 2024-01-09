import { Type } from '@angular/core';

export interface ComponentActionTools {
  click(selector: string): void;

  click(directive: Type<any>): void;

  emitOutput(selector: string, name: string, value?: any): void;

  emitOutput(directive: Type<any>, name: string, value?: any): void;
}