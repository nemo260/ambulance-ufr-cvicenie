/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Nemo260AmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface Nemo260AmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface Nemo260AmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface Nemo260AmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNemo260AmbulanceWlEditorElement;
}
export interface Nemo260AmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNemo260AmbulanceWlListElement;
}
declare global {
    interface HTMLNemo260AmbulanceWlAppElement extends Components.Nemo260AmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLNemo260AmbulanceWlAppElement: {
        prototype: HTMLNemo260AmbulanceWlAppElement;
        new (): HTMLNemo260AmbulanceWlAppElement;
    };
    interface HTMLNemo260AmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLNemo260AmbulanceWlEditorElement extends Components.Nemo260AmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNemo260AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLNemo260AmbulanceWlEditorElement, ev: Nemo260AmbulanceWlEditorCustomEvent<HTMLNemo260AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNemo260AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLNemo260AmbulanceWlEditorElement, ev: Nemo260AmbulanceWlEditorCustomEvent<HTMLNemo260AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNemo260AmbulanceWlEditorElement: {
        prototype: HTMLNemo260AmbulanceWlEditorElement;
        new (): HTMLNemo260AmbulanceWlEditorElement;
    };
    interface HTMLNemo260AmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLNemo260AmbulanceWlListElement extends Components.Nemo260AmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLNemo260AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLNemo260AmbulanceWlListElement, ev: Nemo260AmbulanceWlListCustomEvent<HTMLNemo260AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLNemo260AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLNemo260AmbulanceWlListElement, ev: Nemo260AmbulanceWlListCustomEvent<HTMLNemo260AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLNemo260AmbulanceWlListElement: {
        prototype: HTMLNemo260AmbulanceWlListElement;
        new (): HTMLNemo260AmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "nemo260-ambulance-wl-app": HTMLNemo260AmbulanceWlAppElement;
        "nemo260-ambulance-wl-editor": HTMLNemo260AmbulanceWlEditorElement;
        "nemo260-ambulance-wl-list": HTMLNemo260AmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface Nemo260AmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface Nemo260AmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: Nemo260AmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface Nemo260AmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: Nemo260AmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "nemo260-ambulance-wl-app": Nemo260AmbulanceWlApp;
        "nemo260-ambulance-wl-editor": Nemo260AmbulanceWlEditor;
        "nemo260-ambulance-wl-list": Nemo260AmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nemo260-ambulance-wl-app": LocalJSX.Nemo260AmbulanceWlApp & JSXBase.HTMLAttributes<HTMLNemo260AmbulanceWlAppElement>;
            "nemo260-ambulance-wl-editor": LocalJSX.Nemo260AmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLNemo260AmbulanceWlEditorElement>;
            "nemo260-ambulance-wl-list": LocalJSX.Nemo260AmbulanceWlList & JSXBase.HTMLAttributes<HTMLNemo260AmbulanceWlListElement>;
        }
    }
}
