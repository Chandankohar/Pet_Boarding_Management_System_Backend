import { useMemo } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <section
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.newsletter}>
        <div className={styles.newsletterChild} />
        {/* <img className={styles.pet1Icon} alt="" src="/pet-1-1@2x.png" /> */}
        <div className={styles.newsletterForm}>
          <div className={styles.newsletterContent}>
            <div className={styles.toReceiveUpdateAboutPetPWrapper}>
              
            </div>
            
          </div>
        </div>
        {/* <img
          className={styles.pet2Icon}
          loading="lazy"
          alt=""
          src="/pet-2@2x.png"
        /> */}
      </div>
      <footer className={styles.information}>
        <div className={styles.informationChild} />
        <div className={styles.informationList}>
          <div className={styles.infoListItems}>
            <div className={styles.petShop}>Pet Shop</div>
            <div className={styles.aboutUsPetShopContainer}>
              <p className={styles.aboutUs}>About Us</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.petShopStores}>{`Pet Shop Stores `}</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.contactUs}>Contact Us</p>
            </div>
          </div>
          <div className={styles.infoListItems1}>
            <div className={styles.buyOnline}>Buy online</div>
            <div className={styles.shippingConditionsPaymentOContainer}>
              <p className={styles.shippingConditions}>Shipping conditions</p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.paymentOptions}>Payment options</p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.howToPurchase}>How to Purchase Pet</p>
            </div>
          </div>
          <div className={styles.infoListItems2}>
            <div className={styles.information1}>Information</div>
            <div className={styles.campaignsPromotionsTermsContainer}>
              <p
                className={styles.campaignsPromotions}
              >{`Campaigns & Promotions`}</p>
              <p className={styles.blankLine4}>&nbsp;</p>
              <p className={styles.termsAndConditions}>Terms and conditions</p>
              <p className={styles.blankLine5}>&nbsp;</p>
              <p className={styles.privacyPolicy}>Privacy Policy</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.social}>
          <div className={styles.socialIcons}>
            <div className={styles.socialLinks}>
              <img
                className={styles.tweetTwitterTwitterLogoIcoIcon}
                loading="lazy"
                alt=""
                src="/5305172-tweet-twitter-twitter-logo-icon-1.svg"
              />
            </div>
            <div className={styles.socialLinks1}>
              <img
                className={styles.fbSocialMediaFacebookFacebIcon}
                loading="lazy"
                alt=""
                src="/5282541-fb-social-media-facebook-facebook-logo-social-network-icon-1.svg"
              />
            </div>
            <img
              className={styles.cameraInstagramSocialMediaIcon}
              loading="lazy"
              alt=""
              src="/5335781-camera-instagram-social-media-instagram-logo-icon-1.svg"
            />
          </div>
        </div> */}
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Footer;
