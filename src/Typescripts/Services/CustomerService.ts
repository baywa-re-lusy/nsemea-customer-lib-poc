import Swal from "sweetalert2";
import * as log from 'N/log';
import * as search from 'N/search';
import * as url from 'N/url';
import { Customer } from '../Entities/Customer';



export class CustomerService {
  displayAlert(title: string, message: string) {
    log.debug('CustomerService', 'displayAlert');
    Swal.fire({
      title: title,
      text: message,
      icon: "warning"
    });
  }

  /**
   * Checks if a customer is currently active by comparing their entity status
   * with the expected active status value.
   *
   * @param param - A customer ID (number) or a Customer object.
   * @param activeEntityStatus - The internal ID of the active status to compare.
   * @returns `true` if the customer exists and their status matches `activeEntityStatus`, otherwise `false`.
   */
  isCustomerActive(param: number | Customer, activeEntityStatus: string): boolean {
    const customerId = typeof param === 'number'
      ? param
      : param && 'id' in param
        ? param.id
        : null;

    if (!customerId) {
      return false;
    }

    const customer = search.lookupFields({
      type: search.Type.CUSTOMER,
      id: customerId,
      columns: ['entitystatus']
    });

    return customer.entitystatus === activeEntityStatus;
  }

  /**
   * Generates a NetSuite URL to view a customer record.
   *
   * @param param - A customer ID (number) or a Customer object.
   * @returns A URL string pointing to the customer record view page.
   *          If the ID is invalid, the result may be undefined or throw based on `url.resolveRecord` behavior.
   */
  getUrlCustomerRecord(param: number | Customer): string  {
    const customerId = typeof param === 'number'
      ? param
      : param && 'id' in param
        ? param.id
        : null;
    if (!customerId) {
      throw new Error('Invalid customer ID provided');
    }

    return url.resolveRecord({
      recordType: 'customer',
      recordId: customerId,
      isEditMode: false
    });
  }


}
