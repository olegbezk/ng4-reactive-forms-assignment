import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from "./custom.validators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    projectForm:FormGroup;
    statuses:string[] = ['stable', 'critical', 'finished'];

    ngOnInit() {
        this.projectForm = new FormGroup({
            'projectName': new FormControl(null, [Validators.required, CustomValidators.forbiddenProjectName],
                CustomValidators.asyncForbiddenProjectName),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'projectStatus': new FormControl('critical')
        });
    }

    onSubmit() {
        console.log(this.projectForm.value);
    }
}
