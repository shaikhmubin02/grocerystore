import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '../ui/button';

const InquiryForm = () => { 
  const [state, handleSubmit] = useForm("xpwaqoar");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      handleSubmit(e);
    } else {
      alert('Please fill out name, email, and message fields before submitting.');
    }
  };

  if (state.succeeded) {
    return <p>Thanks for submitting! We will reply to you soon!</p>;
  }

  return (
    <form action="https://formspree.io/f/xpwaqoar" method='post' className="grid gap-4" onSubmit={handleFormSubmit}> 
      
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
      </div>
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Enter your message" rows={4} value={formData.message} onChange={handleChange} />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>Submit</Button>
    </form>
  );
};

export default InquiryForm;
