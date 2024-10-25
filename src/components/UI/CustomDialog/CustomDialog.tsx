import classes from "./CustomDialog.module.css";

interface CustomDialogProps {
  children: React.ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  preCloseDialogAction?: () => void;
}
const CustomDialog = ({
  children,
  dialogRef,
  preCloseDialogAction,
}: CustomDialogProps) => {


  const closeDialog = () => {
    if (preCloseDialogAction) preCloseDialogAction();
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef} className={classes.CustomDialog}>
      {children}
      <button className={ classes.CloseButton}onClick={closeDialog}>×</button>
    </dialog>
  );
};

export default CustomDialog;
