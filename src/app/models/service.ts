import { Sale } from "./sales";

export class Service extends Sale {
    public customer_name : string;
    public address : string;
    public phone : string;
    public service_date : string;
    public return_date : string;
    public service_charge : number;
}