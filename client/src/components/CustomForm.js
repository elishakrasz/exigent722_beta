import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const ContactForm = ({ status, message, onValidated, onSubmit }) => {
  const [showOption, setOption] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [aliyah, setAliyah] = useState('');
  const [ami, setAmi] = useState(false);
  const [tep, setTep] = useState(false);
  const [pad, setPad] = useState(false);
  const [aliyahConcerge, setAliyahConcerge] = useState(false);
  const [homePurchase, setHomePurchase] = useState(false);
  const [mortgage, setMortgage] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [propertyManagement, setPropertyManagement] = useState(false);
  const [privateBanking, setPrivateBanking] = useState(false);
  const [ex722, setEx722] = useState(true);

  const handleComplete = (e) => {
    if (!showOption) {
      setOption(true);
    }

    e.preventDefault();

    if (showOption) {
      email &&
        firstName &&
        lastName &&
        phone &&
        country &&
        aliyah &&
        ami &&
        tep &&
        pad &&
        aliyahConcerge &&
        homePurchase &&
        mortgage &&
        insurance &&
        propertyManagement &&
        privateBanking &&
        email.indexOf('@') > -1 &&
        onValidated({
        //  onSubmit({
          EMAIL: email,
          MERGE1: firstName,
          MERGE2: lastName,
          MERGE6: phone,
          MERGE3: country,
          MERGE5: aliyah,
          'group[53477][4]': ami,
          'group[53349][1]': tep,
          'group[53353][2]': pad,
          'group[53481][8]': ex722,
          'group[53489][16]': aliyahConcerge,
          'group[53493][32]': homePurchase,
          'group[53497][64]': mortgage,
          'group[53501][128]': insurance,
          'group[53505][256]': propertyManagement,
          'group[53509][512]': privateBanking,
        });

        
    }
    if(status==="success") {
      console.log("success today")
    }
  };

  return (
    <div className="mx-24 px-24">
      <section className="mt-24">
        <div className="flex">
          <div className="w-1/4"></div>
          <div className="w-1/2">
            <form
              className="bg-white ml-16 pl-10 py-8 pr-10 rounded-lg mt-4"
              style={{
                boxShadow: '0 10px 28px rgba(0,0,0,.05)',
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone (optional)"
                  value={phone}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Current Country of Residence
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country of Residence"
                  value={country}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Target Move/Aliyah Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  onChange={(e) => setAliyah(e.target.value)}
                  type="date"
                  placeholder="Aliyah Date"
                  value={aliyah}
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
                          name="ami"
                          id="ami"
                          value={ami}
                          checked={ami}
                          onChange={() => setAmi(!ami)}
                        />
                        <span className="pl-2">ASSET MANAGEMENT AND INVESTMENTS</span>
                      </div>
                    </label>
                    <label className="block text-gray-700 text-sm font-bold my-2">
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="tep"
                          id="tep"
                          value={tep}
                          checked={tep}
                          onChange={() => setTep(!tep)}
                        />
                        <span className="pl-2">TAX AND ESTATE PLANNING</span>
                      </div>
                    </label>
                    <label className="block text-gray-700 text-sm font-bold my-2">
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="pad"
                          id="pad"
                          value={pad}
                          checked={pad}
                          onChange={() => setPad(!pad)}
                        />
                        <span className="pl-2">PHILANTHROPIC ADVISORY AND DUE DILIGENCE</span>
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
                        <input
                          className=""
                          type="checkbox"
                          name="aliyahConcerge"
                          id="aliyahConcerge"
                          value={aliyahConcerge}
                          checked={aliyahConcerge}
                          onChange={() => setAliyahConcerge(!aliyahConcerge)}
                        />
                        <span className="pl-2">Aliyah Concierge</span>
                      </div>
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="homePurchase"
                          id="homePurchase"
                          value={homePurchase}
                          checked={homePurchase}
                          onChange={() => setHomePurchase(!homePurchase)}
                        />
                        <span className="pl-2">Home purchase</span>
                      </div>
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="mortgage"
                          id="mortgage"
                          value={mortgage}
                          checked={mortgage}
                          onChange={() => setMortgage(!mortgage)}
                        />
                        <span className="pl-2">Mortgage</span>
                      </div>
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="insurance"
                          id="insurance"
                          value={insurance}
                          checked={insurance}
                          onChange={() => setInsurance(!insurance)}
                        />
                        <span className="pl-2">Insurance</span>
                      </div>
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="propertyManagement"
                          id="propertyManagement"
                          value={propertyManagement}
                          checked={propertyManagement}
                          onChange={() => setPropertyManagement(!propertyManagement)}
                        />
                        <span className="pl-2">Property Management</span>
                      </div>
                      <div>
                        <input
                          className=""
                          type="checkbox"
                          name="privateBanking"
                          id="privateBanking"
                          value={privateBanking}
                          checked={privateBanking}
                          onChange={() => setPrivateBanking(!privateBanking)}
                        />
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
                  // onClick={() => setOption(true)}
                  onClick={handleComplete}
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

export default ContactForm;
