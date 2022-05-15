import Head from "next/head";
import { Fragment, useEffect } from "react";
import BannerTitle from "../../components/BannerTitle";
import Image from "next/image";
import Container from "../../components/Container";

const content = {
  title_one: "Have questions?",
  title_two: "Our team is here to support you!",
  button: "Let’s talk!",
};

const classes = {
  headerBlock: "text-center mx-auto",
  header:
    "font-bold text-base md:text-2xl lg:text-3xl xl:text-4xl leading-tight text-center",
  cardsSection:
    "grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  cardContainer: "rounded-3xl shadow-gamma h-auto",
  cardBlock: "flex flex-col items-center justify-center py-7",
  cardImage: "rounded-full grayscale",
  cardHeader: "font-bold text-lg leading-tight text-center",
  cardSubHeader: "text-xs leading-tight text-center",
  cardDescription: "mx-7 text-sm leading-tight text-center",
  cardButton:
    "font-semibold bg-yellow text-black px-6 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl",
};

const USER_LIST = [
  {
    id: 1,
    name: "Nane Karapetyan",
    alt: "NANE KARAPETYAN",
    img: "/images/contact_us/nane_karapetyan.png",
    position: "SEO specialist at Optify.ai",
    icon: "/images/position_one.png",
    iconAlt: "POSITION_ONE",
    description: "For link building cooperations",
    link: "https://calendly.com/nane-optify",
  },
  {
    id: 2,
    name: "Arpi Pakhanyan",
    alt: "ARPI PAKHANYAN",
    img: "/images/contact_us/arpi_pakhanyan.png",
    position: "SEO/Marketing",
    icon: "/images/position_two.svg",
    iconAlt: "POSITION_TWO",
    description: "To become a partner",
    link: "https://calendly.com/arpi_p/30min",
  },
  {
    id: 3,
    name: "Georgi Mamajanyan",
    alt: "GEROGI MAMAJANYAN",
    img: "/images/contact_us/georgi_mamajanyan.png",
    position: "CEO at Optify.ai | Off-Page SEO Expert",
    icon: "/images/position_three.svg",
    iconAlt: "POSITION_THREE",
    description: "To become a client",
    gmail: "georgemamajanyan97@gmail.com",
    link: "https://calendly.com/georgemamajanyan97/15min",
  },
];

const ContactUs = () => {
  const title = "Contact Us";
  const paragraph =
    "The SayNine squad is always here for new collabs. Drop us a line to discuss your business growth through our SEO workflow! ";
  useEffect(() => {
    document.body.classList.add("banner");
    return () => {
      document.body.classList.remove("banner");
    };
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Contact Us | Saynine</title>
        <meta
          name="description"
          content="Got some cool ideas for growth? We will be excited to discuss your project and make it ours to work on! So, drop us a line!"
        />
      </Head>
      <BannerTitle title={title} paragraph={paragraph} />
      <div className="pt-30" />
      <Container className="px-4 md:px-12 lg:px-30">
        <div className={classes.headerBlock}>
          <h1 className={classes.header}>
            {content.title_one} <br />
            {content.title_two}
          </h1>
        </div>
        <div className="pt-5" />
        <div className={classes.cardsSection}>
          {USER_LIST.map((user) => (
            <div key={user.id} className={classes.cardContainer}>
              <div className={classes.cardBlock}>
                <Image
                  src={user.img}
                  width={128}
                  height={128}
                  alt={user.alt}
                  className={classes.cardImage}
                />
                <div className="relative left-11 bottom-6">
                  <Image
                    src={user.icon}
                    width={30}
                    height={30}
                    alt={user.iconAlt}
                  />
                </div>
                <div className="pt-4" />
                <h4 className={classes.cardHeader}>{user.name}</h4>
                <p className={classes.cardSubHeader}>{user.position}</p>
                <div className="pt-4" />
                <p className={classes.cardDescription}>{user.description}</p>
                <div className="pt-4" />
                <a
                  target="_blank"
                  href={user.link}
                  rel="noopener noreferrer"
                  className={classes.cardButton}
                >
                  {content.button}
                </a>
                <div className="h-5">
                  {user.gmail && (
                    <div className="flex justify-center pt-2">
                      <div className="">
                        <span className="mr-1 text-xs text-primary-light">
                          or
                        </span>
                      </div>
                      <div className="ml-1">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=georgi@saynine.ai"
                          target="_blank"
                        >
                          <Image
                            src="/images/contact_us/icon-gmail.svg"
                            width={28}
                            height={28}
                            alt="ICON-GMAIL"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="pt-32" />
    </Fragment>
  );
};

export default ContactUs;
