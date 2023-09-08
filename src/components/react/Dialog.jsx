/** @format */
import contentful from "../../lib/contentful.js";
import { isDialogOpen } from "../../states.js";
import { useStore } from "@nanostores/react";
import "./Dialog.css";

const cmsClient = new contentful(
  "CFPAT-Fv8bCvvESWMdNndVTO3yP-73aO_RfUfHEl5GoDxrKj8",
  "noepe1fl3llv"
);

export default function Dialog(props) {
  const $isDialogOpen = useStore(isDialogOpen);
  let CloseButton = props.closeDialog;
  let OpenButton = props.openDialog;

  return (
    <div>
      <div>{OpenButton}</div>
      <dialog open={$isDialogOpen} id={props.id}>
        {props.closeDialog}
        {props.children}
      </dialog>
    </div>
  );
}
