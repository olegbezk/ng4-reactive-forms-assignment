import {FormControl} from '@angular/forms';
import {Observable} from "rxjs/Observable";

export class CustomValidators {

    static forbiddenProjectName(formControl: FormControl): {[s: string]: boolean} {
        if (formControl.value === 'Test') {
            return {'forbiddenProjectName': true};
        }
        return null;
    }

    static asyncForbiddenProjectName(formControl: FormControl): Promise<any> | Observable<any> {
        return  new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    if (formControl.value === 'TestProject') {
                        resolve({'forbiddenProjectName': true})
                    } else {
                        resolve(null);
                    }
                }, 1000);
            });
    }
}