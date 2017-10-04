import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyAppService {
    public getFoos(): Observable<any> {
        return Observable.of([
            { label: 'abc', value: 1 },
            { label: 'def', value: 2 },
            { label: 'ghi', value: 3 },
            { label: 'jkl', value: 4 },
            { label: 'mno', value: 5 },
            { label: 'pqr', value: 6 },
            { label: 'stu', value: 7 },
            { label: 'vwx', value: 8 },
            { label: 'yz', value: 9 }
        ]);
    }

}
