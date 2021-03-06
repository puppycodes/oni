/**
 * QuickOpen.ts
 *
 * Manages the quick open menu
 */

import { execSync } from "child_process"
import * as path from "path"
import { INeovimInstance } from "./../NeovimInstance"
import * as UI from "./../UI/index"

export class QuickOpen {

    private _seenItems: string[] = []

    constructor(neovimInstance: INeovimInstance) {
        UI.events.on("menu-item-selected", (selectedItem: any) => {
            const arg = selectedItem.selectedOption
            const fullPath = path.join(arg.detail, arg.label)

            this._seenItems.push(fullPath)

            if (!selectedItem.openInSplit) {
                neovimInstance.command("e! " + fullPath)
            } else {
                neovimInstance.command("vsp! " + fullPath)
            }
        })

    }

    public show(): void {
        const trackedFiles = execSync("git ls-files").toString("utf8").split("\n")
        const untrackedFiles = execSync("git ls-files --others --exclude-standard").toString("utf8").split("\n")
        const files = trackedFiles.concat(untrackedFiles)

        const options = files.map((f) => {
            const file = path.basename(f)
            const folder = path.dirname(f)
            const fullPath = path.join(folder, file)
            return {
                icon: "file-text-o",
                label: file,
                detail: folder,
                pinned: this._seenItems.indexOf(fullPath) >= 0,
            }
        })

        UI.showPopupMenu("quickOpen", options)
    }

}
