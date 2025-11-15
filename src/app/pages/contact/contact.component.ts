import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../common/utility/custom-spinner/custom-spinner.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../../data/contact-form.model';
import { ContactService } from '../../services/contact/contact.service';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomSpinnerComponent, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent {
  contactForm: FormGroup;
  private contactAddedSubject = new BehaviorSubject<Contact | null>(null);
  contactAdded$ = this.contactAddedSubject.asObservable();
  message: string = '';
  isSubmitting: boolean = false;

  // EmailJS Configuration - Get these from your EmailJS dashboard
  private emailJsConfig = {
    serviceId: 'service_cgu99g3',      // Replace with your Service ID
    templateId: 'template_qpobvao',    // Replace with your Template ID
    publicKey: 'd_i5RGFfSwZJEqhH7'       // Replace with your Public Key
  };

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    // Initialize EmailJS with your public key
    emailjs.init(this.emailJsConfig.publicKey);
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.message = '';

      const formData = this.contactForm.value;

      // Prepare email template parameters
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'info@premiercarebilling.com' // Your receiving email
      };

      try {
        // Send email via EmailJS
        const emailResponse = await emailjs.send(
          this.emailJsConfig.serviceId,
          this.emailJsConfig.templateId,
          emailParams
        );

        console.log('Email sent successfully:', emailResponse);

        // Optionally, still save to your backend/database
        const newContact: Contact = {
          id: 0,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        };

        // Show success message
        this.message = "Thank you! We'll contact you soon.";
        this.contactForm.reset();

      } catch (error) {
        console.error('Failed to send email:', error);
        this.message = 'Failed to send message. Please try again or email us directly at info@premiercarebilling.com';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  // Helper methods to check form control validity
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return (
      control != null && control.invalid && (control.dirty || control.touched)
    );
  }
}