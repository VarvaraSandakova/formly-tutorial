import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function EmailValidator(control: FormControl | any): ValidationErrors | null {
  return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    .test(control.value) ? null : { 'email': true };
}

export function EmailValidatorMessage(err:any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}

export function minlengthValidationMessage(err: ValidationErrors, field: FormlyFieldConfig) {
  return `Should have atleast ${field?.templateOptions?.minLength} characters`;
}

export function maxlengthValidationMessage(err: ValidationErrors, field: FormlyFieldConfig) {
  return `This value should be less than ${field?.templateOptions?.maxLength} characters`;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot(
      {
          extras: { lazyRender: true },
          validationMessages: [
            { name: 'required', message: 'This field is required' },
            { name: 'minlength', message: minlengthValidationMessage },
            { name: 'maxlength', message: maxlengthValidationMessage },
            { name: 'email', message: EmailValidatorMessage }
         ],
          validators: [
             { name: 'ip', validation: EmailValidator },
          ],
       },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
