import React from 'react';
import Link from 'next/link';

const content = {
  header: "Contact Us",
  paragraph: "Got a growth mindset? Drop us a line to discuss how we can help you rank higher on Search Engines through kickass backlinks. 50+ companies have trusted us. You can be next!",
  button: "Let’s talk!"
}

const classes = {
  root: 'h-410 homepage_contact_us flex flex-col items-center justify-center',
  header: 'font-bold text-2xl lg:text-4xl leading-tight text-center',
  text: 'font-light text-base leading-tight text-center',
  cardButton:
    'font-semibold bg-yellow text-black px-6 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl',
};

const ContactUs = () => {
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>{content.header}</h2>
      <div className='pt-5 md:pt-2' />
      <div className='w-auto px-4 md:w-135 md:px-0'>
        <p className={classes.text}>
          {content.paragraph}
        </p>
      </div>
      <div className='pt-4' />
      <Link href='/contact-us'>
        <button className={classes.cardButton}>{content.button}</button>
      </Link>
    </div>
  );
};

export default ContactUs;
