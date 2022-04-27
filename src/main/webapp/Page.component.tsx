import Alert from "@mui/material/Alert";
import { Editor } from "./react/components/Editor.component";
import { GameScene } from "./react/components/GameScene.component";
import { PageType } from "./react/components/Header.component";
import { Props } from "./react/utils/Props.interface";

export interface PageProps extends Props {
    pageType: PageType
}

export function Page(props: PageProps): JSX.Element {
    if (props.pageType === PageType.Editor) {
        return <Editor />
    } else if (props.pageType === PageType.Game) {
        return <GameScene />
    }
    return <Alert severity="error">No page rendered for page type {props.pageType}</Alert>;
}