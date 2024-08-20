import { Dialog, DialogClose, DialogContent } from './ui/dialog';
import { FiX } from "react-icons/fi";

type Props = {
  openDrawer: boolean;
  closeOpenDrawer : () => void;
};
export default function Drawer({ openDrawer, closeOpenDrawer }: Props) {
  return (
    <Dialog open={openDrawer}>
      <DialogContent className='w-[100vw] sm:w-[50vw] h-[50vh] flex p-4 bg-foreground border-2 border-primary'>
        <DialogClose className='h-7 absolute top-5 right-5 flex w-7 rounded-full border border-primary' onClick={() => closeOpenDrawer()}>
          <FiX className='h-6 text-primary w-6' />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
