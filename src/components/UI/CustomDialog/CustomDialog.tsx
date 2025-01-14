import classes from "./CustomDialog.module.css";

interface CustomDialogProps {
  children: React.ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement>;
  showCloseButton?: boolean;
  preCloseDialogAction?: () => void;
}
const CustomDialog = ({
  children,
  dialogRef,
  showCloseButton = true,
  preCloseDialogAction,
}: CustomDialogProps) => {


  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog onClose={preCloseDialogAction} ref={dialogRef} className={classes.CustomDialog}>
      {children}
     {showCloseButton && <button className={ classes.CloseButton}onClick={closeDialog}>×</button>}
    </dialog>
  );
};

export default CustomDialog;
