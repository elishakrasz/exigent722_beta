import React, { useState } from 'react';

const ContactFormNet = () => {
  const [showOption, setShowOption] = useState(false);

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    aliyah: '',
    ami: '',
    tep: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOption(true);

    if (showOption) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formState }),
      
      })
        .then(() => console.log('formState', formState))
        .then(() => alert('Success!'))
        .catch((error) => alert(error))
        .then(() =>
          setFormState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            aliyah: '',
            ami: '',
            tep: ''
          })
        )
        .then(() => setShowOption(false));

      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    if (e.target.type === 'checkbox' && !e.target.checked) {
      setFormState({ ...formState, [e.target.name]: '' });
      // setFormState({...formState, [e.target.name]: 'true'});
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    // setFormState({
    //   ...formState,
    //   [e.target.name]: e.target.value,
    // });
    //  setAmi(true)
  };
  return (
    <div className="2xl:mx-24 2xl:px-24 xl:mx-8 xl:px-8 lg:mx-4 lg:px-4" id="form">
      <section className="mt-24">
        {/* <div className="mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-extraLight">Contact</h2>
    </div> */}
        <div className="flex">
          <div className="w-1/4"></div>
          <div className="w-1/2">
            <form
              className=""
              name="contact"
              method="post"
              action="/#services"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="bg-white ml-16 pl-10 py-8 pr-10 rounded-lg mt-4"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.05)',
              }}
            >
              <div className="mb-4">
                <input type="hidden" name="form-name" value="contact" />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  value={formState.firstName}
                  name="firstName"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  value={formState.lastName}
                  name="lastName"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone (optional)"
                  value={formState.phone}
                  name="phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                  Current Country of Residence
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  onChange={handleChange}
                  type="text"
                  placeholder="Country of Residence"
                  value={formState.country}
                  name="country"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aliyah">
                  Target Move/Aliyah Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="aliyah"
                  onChange={handleChange}
                  type="date"
                  placeholder="Aliyah Date"
                  value={formState.aliyah}
                  name="aliyah"
                />
              </div>
              {/* {showOption && <OtherServices />} */}
              {showOption && (
                <div>
                  <div className="mt-8">
                    <h5 className="font-semibold">
                      Check all that apply <span className="font-medium">(optional)</span>:
                    </h5>
                    <h2 className="mt-2 font-semibold">Multi-Family Office </h2>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold my-2">
                      <div>
                      
                        <input
                          className=""
                          type="checkbox"
                          checked={formState.ami}
                          name="ami"
                          id="ami"
                          onChange={handleChange}
                          value="Asset Management"
                        />
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ami">
                      ASSET MANAGEMENT AND INVESTMENTS
                </label> */}
                        <span className="pl-2">ASSET MANAGEMENT AND INVESTMENTS</span>
                      </div>
                      <div>
                      
                        <input
                          className=""
                          type="checkbox"
                          onChange={handleChange}
                          name="tep"
                          id="tep"
                          checked={formState.tep}
                          value="Tax and Estate Planning"
                        />
                        {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tep">
                      TAX AND ESTATE PLANNING
                </label> */}
                        <span className="pl-2">TAX AND ESTATE PLANNING</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">PHILANTHROPIC ADVISORY AND DUE DILIGENCE</span>
                      </div>
                    </label>
                  </div>

                  <div className="mt-4">
                    {/* <h5 className="">Check all that apply:</h5> */}
                    <h2 className="mt-2 font-semibold">Other Services</h2>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold my-2">
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Aliyah Concierge</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Home purchase</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Mortgage</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Insurance</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Mortgage</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Property Management</span>
                      </div>
                      <div>
                        <input className="" type="checkbox" />
                        <span className="pl-2">Private Banking</span>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between">
                <button
                  style={{
                    backgroundColor: '#C41E3A',
                  }}
                  className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  {showOption ? 'Submit' : 'Complete'}
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/4"></div>
        </div>
      </section>
    </div>
  );
};

export default ContactFormNet;
