import React, { useState } from 'react'

const OtherServices = () => (
    <div>
         <div className="mt-8">
                    <h5 className="font-semibold">Check all that apply <span className="font-medium">(optional)</span>:</h5>
                    <h2 className="mt-2 font-semibold">Multi-Family Office </h2>
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    ASSET MANAGEMENT AND INVESTMENTS
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    TAX AND ESTATE PLANNING 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    PHILANTHROPIC ADVISORY AND DUE DILIGENCE 
                    </span>
                    </div>
                  </label>
                </div>
                <div className="mt-4">
                    {/* <h5 className="">Check all that apply:</h5> */}
                    <h2 className="mt-2 font-semibold">Other Services</h2>
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Aliyah Concierge
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Home purchase 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Mortgage 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Insurance 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Mortgage 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Property Management  
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Private Banking  
                    </span>
                    </div>
                  </label>
                </div>
    </div>
)

const ContactForm = () => {

    const [showOption, setOption] = useState(false);

    const handleComplete = (e) => {
        setOption(true)
    }

    return (
        <div className="mx-24 px-24">
        <section className="mt-24">
    <div className="flex"> 
            <div className="w-1/4"></div>
            <div className="w-1/2">
              <form className="bg-white ml-16 pl-10 py-8 pr-10 rounded-lg mt-4"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.05)'
              }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Phone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Phone (optional)"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                     Current Country of Residence
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Country of Residence"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                     Target Move/Aliyah Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="date"
                    placeholder="Aliyah Date"
                  />
                </div>
                {/* {showOption && <OtherServices />} */}
                {showOption && <div>
         <div className="mt-8">
                    <h5 className="font-semibold">Check all that apply <span className="font-medium">(optional)</span>:</h5>
                    <h2 className="mt-2 font-semibold">Multi-Family Office </h2>
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    ASSET MANAGEMENT AND INVESTMENTS
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    TAX AND ESTATE PLANNING 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    PHILANTHROPIC ADVISORY AND DUE DILIGENCE 
                    </span>
                    </div>
                  </label>
                </div>
                <div className="mt-4">
                    {/* <h5 className="">Check all that apply:</h5> */}
                    <h2 className="mt-2 font-semibold">Other Services</h2>
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold my-2" for="username">
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Aliyah Concierge
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Home purchase 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Mortgage 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Insurance 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Mortgage 
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Property Management  
                    </span>
                    </div>
                    <div>
                    <input className="" type="checkbox" />
                    <span className="pl-2">
                    Private Banking  
                    </span>
                    </div>
                  </label>
                </div>
    </div>}

                <div className="pt-4 flex items-center justify-between">
                  <button
                    style={{
                      backgroundColor: '#C41E3A'
                    }}
                    className="text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    // onClick={() => setOption(true)}
                    onClick={handleComplete}
                  >
                   {showOption ? 'Complete2': 'Submit'}
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/4"></div>
          </div>
    </section>
    </div>
    )
    
                }

export default ContactForm