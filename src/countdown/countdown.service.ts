import {Injectable} from "@angular/core";
import moment = require("moment");
import {Observable} from "rxjs";
import {PartialObserver} from "rxjs/Observer";

@Injectable()
export class CountdownService {

  getSecondsBetween(end: moment.Moment): Observable<number> {
    return Observable.create((observer: PartialObserver<number>) => {
      setInterval(() => {
        observer.next(end.diff(moment()))
      }, 500);
    })
  }
}
