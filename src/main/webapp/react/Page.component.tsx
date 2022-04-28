import Alert from "@mui/material/Alert";
import { Editor } from "./components/Editor.component";
import { GameScene } from "./components/GameScene.component";
import { PageType } from "./components/Header.component";
import { Props } from "./utils/Props.interface";

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