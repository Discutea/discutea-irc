import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IrcService} from '@discutea/services/irc.service';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.less']
})
export class ConnexionComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private ircService: IrcService
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            gender: ['', Validators.required],
            age: ['', Validators.required],
            location: ['', Validators.required]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        this.ircService.connection(this.loginForm.value);

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;


        // Todo: connect user
    }

}


