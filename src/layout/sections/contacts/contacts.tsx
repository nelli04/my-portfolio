import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import axios from 'axios'

import 'react-toastify/dist/ReactToastify.css'

import style from './contacts.module.scss'
import styleContainer from '@/styles/common/container.module.scss'

export const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = {
      email: email,
      message: message,
      name: name,
      title: title,
    }

    axios
      .post('https://email-nodejs-lemon.vercel.app/send-email', formData)
      .then(() => {
        toast.success('Email sent successfully!', {
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          pauseOnHover: true,
        })
        setName('')
        setEmail('')
        setMessage('')
        setTitle('')
        setIsLoading(false)
      })
      .catch(() => {
        toast.error('Email failed to send.', {
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          pauseOnHover: true,
        })
        setIsLoading(false)
      })
  }

  const inputs = [
    { placeholder: 'Name', tag: 'input' },
    { placeholder: 'Email', tag: 'input', type: 'email' },
    { placeholder: 'Title', tag: 'input' },
    { placeholder: 'Message', tag: 'textarea' },
  ]

  return (
    <section className={style.container}>
      <div className={styleContainer.container}>
        <div className={style.textWrapper}>
          <h2 className={style.title}>Contacts:</h2>
          <p>
            If you have any questions or feedback, please don&apos;t hesitate to reach out to us.
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
          <div className={style.contacts}>
            <div>
              Phone:
              <span>+99 (0)1047011888</span>
            </div>
            <div>
              Email:
              <span>info@nelli_04.ru</span>
            </div>
          </div>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          {inputs.map((input, index) => (
            <>
              {input.tag === 'input' && (
                <input
                  className={style.textField}
                  key={index}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              )}
              {input.tag === 'textarea' && (
                <textarea className={style.textField} key={index} placeholder={input.placeholder} />
              )}
            </>
          ))}
          <button disabled={isLoading}>Send</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}
