//We could export all actions here
import Swal from 'sweetalert2';
import { addItem } from '../store/listStore';

  const openBox = async () => {
    const { value: text } = await Swal.fire({
      title: 'Add item to list',
      input: 'text',
      inputPlaceholder: 'Type the text here...',
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
    });
    if (!text) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'String cannot be empty.',
      });
    } else if (text) {
      addItem(text);
    }
  };

  export default openBox;