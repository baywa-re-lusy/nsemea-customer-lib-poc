/**
 * NS Base customer record - contains definitions for most of the built in fields
 */

import * as record from 'N/record';
import { EntityBase } from '@nsemea_lib/Core/DataAccess/EntityBase'
import {
  FieldTypeDecorator,
  Nullable,
  SubListDecorator,
  SubRecordDecorator,
} from '@nsemea_lib/Core/DataAccess/NSTypedRecord';
import {
  NSSubList,
  SubListFieldTypeDecorator,
  SubListSubRecordDecorator
} from '@nsemea_lib/Core/DataAccess/NSSubList';
import { Address } from  '@nsemea_lib/Entities/Address';
import { NSSubListLine } from '@nsemea_lib/Core/DataAccess/NSSubListLine';

/**
 * The address _sublist_ on customer records, not to be confused with the Address _subrecord_.
 * Customer address info is split between this sublist and the subrecord pointed to by the _addressbook_ field.
 */
export class AddressSublist extends NSSubListLine {

  @SubListSubRecordDecorator(Address)
  accessor addressbookaddress: Address;

  @SubListFieldTypeDecorator()
  accessor attention: string

  @SubListFieldTypeDecorator()
  accessor defaultbilling: boolean

  @SubListFieldTypeDecorator()
  accessor defaultshipping: boolean

  @SubListFieldTypeDecorator()
  accessor displaystate: string

  @SubListFieldTypeDecorator()
  accessor dropdownstate: number

  @SubListFieldTypeDecorator()
  accessor id: number

  @SubListFieldTypeDecorator()
  accessor internalid: number

  @SubListFieldTypeDecorator()
  accessor isresidential: boolean

  @SubListFieldTypeDecorator()
  accessor label: string

  @SubListFieldTypeDecorator()
  accessor override: boolean

  @SubListFieldTypeDecorator()
  accessor phone: string

  @SubListFieldTypeDecorator()
  accessor state: string

  @SubListFieldTypeDecorator()
  accessor zip: string
}

export enum CurrencySymbolPlacement {
  BeforeNumber = 1,
  AfterNumber = 2,
}

export class CurrencySublist extends NSSubListLine {

  @SubListFieldTypeDecorator()
  accessor balance: number

  @SubListFieldTypeDecorator()
  accessor consolbalance: number

  @SubListFieldTypeDecorator()
  accessor consoldepositbalance: number

  @SubListFieldTypeDecorator()
  accessor consoloverduebalance: number

  @SubListFieldTypeDecorator()
  accessor consolunbilledorders: number

  @SubListFieldTypeDecorator()
  accessor currency: number

  @SubListFieldTypeDecorator()
  accessor currencyformatsample: string

  @SubListFieldTypeDecorator()
  accessor depositbalance: number

  @SubListFieldTypeDecorator()
  accessor displaysymbol: string

  @SubListFieldTypeDecorator()
  accessor overduebalance: number

  @SubListFieldTypeDecorator()
  accessor overridecurrencyformat: boolean

  @SubListFieldTypeDecorator()
  accessor symbolplacement: CurrencySymbolPlacement

  @SubListFieldTypeDecorator()
  accessor unbilledorders: number
}

export class ContactsSublist extends NSSubListLine {

  @SubListFieldTypeDecorator()
  accessor contact: number

  @SubListFieldTypeDecorator()
  accessor email: string

  @SubListFieldTypeDecorator()
  accessor giveaccess: boolean

  @SubListFieldTypeDecorator()
  accessor passwordconfirm: boolean

  @SubListFieldTypeDecorator()
  accessor role: number

  @SubListFieldTypeDecorator()
  accessor sendemail: boolean

  /**
   * Password strength
   */
  @SubListFieldTypeDecorator()
  accessor strength: string
}

export class CustomerBase extends EntityBase {

  @FieldTypeDecorator()
  accessor pricelevel: number

  @FieldTypeDecorator()
  accessor salesrep: number

  @FieldTypeDecorator()
  accessor taxable: boolean

  @SubListDecorator(AddressSublist)
  accessor addressbook: NSSubList<AddressSublist>

  @SubListDecorator(CurrencySublist)
  accessor currencySublist: NSSubList<CurrencySublist>

  override recordType() {
    return record.Type.CUSTOMER;
  }

}
