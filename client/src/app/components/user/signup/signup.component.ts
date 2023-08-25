import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../../common/simple-dialog/simple-dialog.component';
import { DialogData } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
  submitted: boolean = false;
  passwordHide: boolean = true;
  confirmPasswordHide: boolean = true;
  signupGroup!: FormGroup;

  ngOnInit() {
    this.signupGroup = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern('^[A-Za-z \\.]+')]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[^ ][a-z.\\-_0-9]+@[a-z0-9]+\\.[a-z]{2,10}'),
          ],
        ],
        mobile: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(group: AbstractControl) {
    if (group.get('password')?.value !== group.get('confirmPassword')?.value) {
      group.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  signupSubmit(data: any): void {
    this.submitted = true;
    console.log(data);
    if (!data.invalid) {
      console.log(data.value);
    } else {
      this.dialog.open(SimpleDialogComponent, {
        width: '400px',
        data: {
          title: 'Error',
          content: 'Please fill the fields without errors',
        } as DialogData,
      });
    }
  }
}
