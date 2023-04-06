import React, { useState } from 'react';
import sanityClient from '@sanity/client';

export default function Comment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      await client.create({
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
  
      // clear form data
      setFormData({
        name: '',
        email: '',
        message: ''
      })
  
      // show success message to user
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending message.')
    }
  }
  

  const client = sanityClient({
    projectId: '3msprrd6',
    dataset: 'production',
    apiVersion: '2023-03-23',
    useCdn: false, // optional, use `false` if you want to always read the latest data
  });

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Message:
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </label><br/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
