import {Customer} from "../Entities/Customer";
import * as log from 'N/log';

import Swal from 'sweetalert2';

export class CustomerService {
  displayAlert() {
    Swal.fire({
      title: '123 title',
      text: '123 message',
      icon: "success"
    });
  }
}