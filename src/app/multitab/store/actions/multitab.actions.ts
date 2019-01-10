import { Action } from '@ngrx/store';

export const MULTITAB_ADD = '[Multitab]MULTITAB_ADD';
export const MULTITAB_EDIT = '[Multitab]MULTITAB_EDIT';
export const MULTITAB_DELETE = '[Multitab]MULTITAB_DELETE';

// EXTRA ACTIONS
export class MultitabAdd implements Action {
    readonly type = MULTITAB_ADD;
    constructor(public payload: any /*Model*/) { }
}

export class MultitabEdit implements Action {
    readonly type = MULTITAB_EDIT;
    constructor(public payload: any /*Model*/) { }
}

export class MultitabDelete implements Action {
    readonly type = MULTITAB_DELETE;
    constructor() { }
}


export type MultitabActions = MultitabAdd
    | MultitabEdit
    | MultitabDelete;
