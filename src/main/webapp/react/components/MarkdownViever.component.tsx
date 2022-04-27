import ReactMarkdown from "react-markdown";
import { Props } from "../utils/Props.interface";

export interface MarkdownViewerProps extends Props {
    markdownValue: string;
}

export function MarkdownViewer(props: MarkdownViewerProps) {
    return <ReactMarkdown>{props.markdownValue}</ReactMarkdown>
}