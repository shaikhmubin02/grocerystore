import React from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button';

const Inquiryform = () => { 

  const [state, handleSubmit] = useForm("xpwaqoar");
  if (state.succeeded) {
      return <p>Thanks for submitting! We will reply to you soon!  </p>;
  }

  return (
    <form action="https://formspree.io/f/xpwaqoar" method='post' className="grid gap-4" onSubmit={handleSubmit}> 
      
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="name" name="name" placeholder="Enter your name" />
      </div>
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="Enter your email" />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Enter your message" rows={4} />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>Submit</Button>
    </form>
  )
}

export default Inquiryform