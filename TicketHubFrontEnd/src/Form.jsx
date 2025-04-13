import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    ConcertId: 47697001,
    Email: '',
    Name: '',
    Phone: '',
    Quantity: 1,
    CreditCard: '',
    Expiration: '',
    SecurityCode: '',
    Address: '',
    City: '',
    Province: '',
    PostalCode: '',
    Country: ''
  })

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
  
    // Validate with browser before proceeding
    const form = e.target
    if (!form.checkValidity()) return
  
    try {
      const response = await fetch('https://tickethubw0224620-hcbyhhgxemf4gcgq.canadacentral-01.azurewebsites.net/api/ticket/newticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        console.error('Submission failed:', errorData)
        alert('Error submitting form')
        return
      }
  
      alert('Form submitted successfully!')
      console.log(await response.json())
  
    } catch (err) {
      console.error('Error:', err)
      alert('An unexpected error occurred')
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="mb-3">
        <label className="form-label">Concert ID</label>
        <input type="text" className="form-control" value={formData.ConcertId} disabled />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="Email"
          className="form-control"
          value={formData.Email}
          onChange={handleChange}
          placeholder='example@domain.com'
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="Name"
          className="form-control"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          name="Phone"
          className="form-control"
          value={formData.Phone}
          onChange={handleChange}
          required
          pattern="\d{3}-\d{3}-\d{4}"
          placeholder="123-456-7890"
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-9">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            name="Quantity"
            className="form-control"
            value={formData.Quantity}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            value={`$${formData.Quantity * 690}`}
            readOnly
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Credit Card</label>
          <input
            type="text"
            name="CreditCard"
            className="form-control"
            value={formData.CreditCard}
            onChange={handleChange}
            required
            pattern="[\d\s]{13,19}"
            placeholder="4417 1234 5678 9113"
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Expiration</label>
          <input
            type="text"
            name="Expiration"
            className="form-control"
            value={formData.Expiration}
            onChange={handleChange}
            required
            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
            placeholder="MM/YY"
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            name="SecurityCode"
            className="form-control"
            value={formData.SecurityCode}
            onChange={handleChange}
            required
            pattern="^\d{3,4}$"
            placeholder="3 or 4 digits"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="Address"
          className="form-control"
          value={formData.Address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">City</label>
          <input
            type="text"
            name="City"
            className="form-control"
            value={formData.City}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Province</label>
          <input
            type="text"
            name="Province"
            className="form-control"
            value={formData.Province}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            name="PostalCode"
            className="form-control"
            value={formData.PostalCode}
            onChange={handleChange}
            required
            pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$|^\d{5}(-\d{4})?$"
            placeholder="A1A 1A1 or 12345"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          name="Country"
          className="form-control"
          value={formData.Country}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form
