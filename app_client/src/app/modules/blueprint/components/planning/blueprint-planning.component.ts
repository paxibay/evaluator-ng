import { Component, Inject, Input, ApplicationRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { AppReducer } from "./../../app.reducer";
import { BlueprintModel, Product } from "./../../ngrx/model";
import * as actions from "./../../ngrx/actions"
import * as service from "./../../ngrx/service"

@Component({
  selector: "blueprint-planning",
  templateUrl: "blueprint-planning.component.html"
})
export class BlueprintPlanningComponent {
  blueprint$: Observable<any>;
  products$: Observable<any>;
  appState$: Observable<any>;

  constructor(private store$: Store<AppReducer.State>, public repo: service.BlueprintService, ref: ApplicationRef) {
    this.blueprint$ = this.store$.select(AppReducer.blueprintState);
    this.products$ = this.store$.select(AppReducer.blueprintProductsState);
    this.appState$ = this.store$.select(AppReducer.appState);

    //(<any>window).appRef = ref;
    //(<any>window).model = this.repo;
    // model.products.shift()
    // appRef.tick()
  }

  //changeScopeHandler(scope: number) {
  //  this._store.dispatch(new appActions.ChangeScopeAction({
  //    scope: scope
  //  }));

  //  setTimeout(() => {
  //    this._store.dispatch(new actions.ChangeScopeAction({
  //      scope: scope
  //    }));
  //  }, 400);
  //}

  //addProduct() {
  //  this._store.dispatch(new actions.InitializeAction({
  //    scope: 0
  //  }));
  //}


  ngOnInit() {

    //console.group("group start");
    //const nextState = reducer(currentState, action);
    //console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, 123);
    //console.log(`%c action`, `color: #03A9F4; font-weight: bold`, 234);
    //console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, 345);
    //console.groupEnd();

    //console.log('the payload string is: ' + action.payload.innerObj.text);

  }

}


