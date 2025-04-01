import {Customer} from "../Entities/Customer";
import * as log from 'N/log';

import Swal from 'sweetalert2';

export class CustomerService {
  displayAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: "success"
    });
  }
}