import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { RevenueModel, Repository } from "./model";

@Injectable()
export class RevenueService {

    constructor(private repo: Repository) { }

    get Revenue(): Observable<RevenueModel> {
        return this.repo.Revenue;
    }


}
