import { Component } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form = new FormGroup({});
  public options: FormlyFormOptions = {};
  public model = {
    name: 'Test',
    email: 'test.email@gmail.com',
    motivation:'Share experience',
    content: 1,
    policy: true,
    technology: 'angular',
  };

  public fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        minLength: 1,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
        minLength: 3,
        maxLength: 20,
      },
    },
    {
      key: 'motivation',
      type: 'textarea',
      className: 'customClass',
      defaultValue: 'Share experience',
      hideExpression: '!model.name',
      templateOptions: {
        label: 'What is your motivation for writing?',
        placeholder: 'Type your answer',
      }
    },
    {
      key: 'content',
      type: 'radio',
      templateOptions: {
        label: 'What type of articles would you prefer to write?',
        placeholder: 'Fill the type of content',
        required: true,
        options: [
          { value: 1, label: 'Tutorial' },
          { value: 2, label: 'Deep-dive' },
          { value: 3, label: 'News' },
          { value: 4, label: 'Reference' }
        ],
      },
    },
    {
      key: 'technology',
      type: 'select',
      templateOptions: {
        label: 'Select your main technology',
        options: [
          { label: 'Javascript', value: 'javascript' },
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Other', value: 'other' }
        ],
      },
    },
    {
      key: 'policy',
      type: 'checkbox',
      templateOptions: {
        label: 'I don\'t mind receiving The Deep Dive newsletter',
        required: true,
      }
    }
];

public onSubmit() {
  if (this.form.valid) {
    console.log(JSON.stringify(this.model));
  }
}
}
