export interface ISetCursorPositionAction {
    type: "SET_CURSOR_POSITION",
    payload: {
        pixelX: number,
        pixelY: number,
        fontPixelWidth: number,
        fontPixelHeight: number,
    }
}

export interface IShowSignatureHelpAction {
    type: "SHOW_SIGNATURE_HELP",
    payload: Oni.Plugin.SignatureHelpResult
}

export interface IHideSignatureHelpAction {
    type: "HIDE_SIGNATURE_HELP"
}

export interface IShowMenuAction {
    type: "SHOW_MENU",
    payload: {
        id: string
        options: Oni.Menu.MenuOption[],
    }
}

export interface IFilterMenuAction {
    type: "FILTER_MENU",
    payload: {
        filter: string,
    }
}

export interface IHideMenuAction {
    type: "HIDE_MENU"
}

export interface INextMenuAction {
    type: "NEXT_MENU"
}

export interface IPreviousMenuAction {
    type: "PREVIOUS_MENU"
}

export interface IShowQuickInfoAction {
    type: "SHOW_QUICK_INFO",
    payload: {
        title: string
        description: string,
    }
}

export interface IShowAutoCompletionAction {
    type: "SHOW_AUTO_COMPLETION",
    payload: {
        base: string
        entries: Oni.Plugin.CompletionInfo[],
    }
}

export interface ISetAutoCompletionDetails {
    type: "SET_AUTO_COMPLETION_DETAILS",
    payload: {
        detailedEntry: Oni.Plugin.CompletionInfo,
    }
}

export interface IHideAutoCompletionAction {
    type: "HIDE_AUTO_COMPLETION"
}

export interface INextAutoCompletionAction {
    type: "NEXT_AUTO_COMPLETION"
}

export interface IPreviousAutoCompletionAction {
    type: "PREVIOUS_AUTO_COMPLETION"
}

export interface IHideQuickInfoAction {
    type: "HIDE_QUICK_INFO"
}

export type Action = ISetCursorPositionAction |
    IShowSignatureHelpAction |
    IHideSignatureHelpAction |
    IShowQuickInfoAction |
    IHideQuickInfoAction |
    IShowAutoCompletionAction |
    IHideAutoCompletionAction |
    INextAutoCompletionAction |
    IPreviousAutoCompletionAction |
    ISetAutoCompletionDetails |
    IShowMenuAction |
    IHideMenuAction |
    IPreviousMenuAction |
    INextMenuAction |
    IFilterMenuAction
