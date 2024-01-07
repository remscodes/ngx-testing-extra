import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Nullable } from '../models/shared.model';

export function findComponent<T>(fixture: ComponentFixture<any>, selector: string): T
export function findComponent<T>(fixture: ComponentFixture<any>, directive: Type<T>): T
export function findComponent<T>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<T>): T
export function findComponent<T>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<T>): T {
  return findDebugElement(fixture, selectorOrDirective).componentInstance;
}

export function findAllComponents<T>(fixture: ComponentFixture<any>, selector: string): T[]
export function findAllComponents<T>(fixture: ComponentFixture<any>, directive: Type<T>): T[]
export function findAllComponents<T>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<T>): T[]
export function findAllComponents<T>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<T>): T[] {
  return findAllDebugElements(fixture, selectorOrDirective).map(e => e.componentInstance);
}

export function findElement<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selector: string): T
export function findElement<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, directive: Type<any>): T
export function findElement<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): T
export function findElement<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): T {
  return findDebugElement(fixture, selectorOrDirective).nativeElement;
}

export function findAllElements<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selector: string): T[]
export function findAllElements<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, directive: Type<any>): T[]
export function findAllElements<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): T[]
export function findAllElements<T extends HTMLElement = HTMLElement>(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): T[] {
  return findAllDebugElements(fixture, selectorOrDirective).map(e => e.nativeElement);
}

export function findDebugElement(fixture: ComponentFixture<any>, selector: string): DebugElement
export function findDebugElement(fixture: ComponentFixture<any>, directive: Type<any>): DebugElement
export function findDebugElement(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): DebugElement
export function findDebugElement(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): DebugElement {
  const element: Nullable<DebugElement> = (typeof selectorOrDirective === 'string')
    ? fixture.debugElement.query(By.css(selectorOrDirective))
    : fixture.debugElement.query(By.directive(selectorOrDirective));

  if (!element) throw `Cannot find one DebugElement with ${(typeof selectorOrDirective === 'string') ? `selector "${selectorOrDirective}"` : `directive "${selectorOrDirective.name}"`}`;

  return element;
}

export function findAllDebugElements(fixture: ComponentFixture<any>, selector: string): DebugElement[]
export function findAllDebugElements(fixture: ComponentFixture<any>, directive: Type<any>): DebugElement[]
export function findAllDebugElements(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): DebugElement[]
export function findAllDebugElements(fixture: ComponentFixture<any>, selectorOrDirective: string | Type<any>): DebugElement[] {
  const debug: Nullable<DebugElement[]> = (typeof selectorOrDirective === 'string')
    ? fixture.debugElement.queryAll(By.css(selectorOrDirective))
    : fixture.debugElement.queryAll(By.directive(selectorOrDirective));

  if (!debug) throw `Cannot find many DebugElement with ${(typeof selectorOrDirective === 'string') ? `selector "${selectorOrDirective}"` : `directive "${selectorOrDirective.name}"`}`;

  return debug;
}