import { Action } from '@ngrx/store';

export enum FightersActionTypes {
// example declare action types
    GET = '[Fighters] GET',
}

// example action class
export class Get implements Action {
    readonly type = FightersActionTypes.GET;
}


export type ArticleActions
=
// export action
| Get;
