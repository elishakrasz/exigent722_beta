import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const MailChimpForm = props => {

    // const postUrl = 'https://exigentcap.us6.list-manage.com/subscribe/post?u=dc56f8c59235f954b6a980c56&amp;id=7fe07f1185'
const postUrl = 'https://exigentcap.us6.list-manage.com/subscribe/post?u=dc56f8c59235f954b6a980c56&id=7fe07f1185'
  
    return (
        <div>
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm 
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        // onSubmit={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default MailChimpForm