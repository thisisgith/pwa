import { Action } from '@ngrx/store';
/**
 * This is a sample reducer function for practice
 */
export function SampleReducer( state: string = 'intial state', action: Action) {
    switch (action.type) {
        case 'ESP':
            return state = 'Spanish language selected';
        case 'FRE':
            return state = 'French language selected';
        default:
            return state = 'English language selected';
    }
}
