import React, {useRef, useState} from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp, AiOutlineCloseCircle } from 'react-icons/ai';

import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const Contact = () => {
  // Modal for confirmation de mail envoyé
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Form 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_66bepvt', 'template_frtljsc', form.current, 'GxJ2VCWlbP5vY_kiK')
      .then((result) => {
        console.log(result.text);
        handleShow();
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
      {/* Contact Options */}
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gael.gagoude@gmail.com</h5>
            <a href="mailto:gael.gagoude@gmail.com" rel='noreferrer' target="_blank">Envoyer un message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+33 6 50 62 26 58</h5>
            <a href="https://api.whatsapp.com/send?phone=+33650622658" rel='noreferrer' target="_blank">Envoyer un message</a>
          </article>

        </div>

      {/* Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="fullName" placeholder='Prénom et Nom' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" id="message" cols="30" rows="7" placeholder='Votre message'></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer le message</button>
        </form>

      {/* Modal */}
        <Modal show={show} onHide={handleClose} className='modal_container'>
          <Modal.Body>
            <AiOutlineCloseCircle className='contact_modal_icon' onClick={handleClose} />
            <h5 className='contact_modal_texte' >Votre message a bien été envoyé !</h5>
          </Modal.Body>
        </Modal>
      </div>

    </section>
  )
}

export default Contact;