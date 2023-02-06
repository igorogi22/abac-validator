export enum  DATA_ACTIONS {
    HIDDEN = 'hidden',
    TRANSFORM = 'transform',
    VISIBLE = 'visible',
}

export type Filter = {
    action: DATA_ACTIONS,
    to?: any
}
