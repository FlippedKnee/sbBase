import React, { useState } from "react";
import * as styles from "./Whitelist.styles";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../../components/CustomButton";
import Spacer from "../../components/Spacer";
import NextLink from "../../components/NextLink";
type TWLVerified = {
  discordVerified?: any;
  twitterVerified?: any;
  sign?: string;
  adx?: string | null;
  open?: boolean;
  closeModal: () => void;
};

const truncateString = (str: string) => {
  if (str.length <= 8) {
    return str;
  } else {
    return str.substring(0, 5) + "..." + str.substring(str.length - 4);
  }
};
const WhiteListVerified = ({
  discordVerified,
  twitterVerified,
  adx,
  closeModal,
  open,
}: TWLVerified) => {
  const [modal, setModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dbInstance = collection(db, "wl");
  const [loading, setLoading] = useState(false);
  const addToWl = async () => {
    setLoading(true);
    if (twitterVerified && adx) {
      try {
        const doc = await addDoc(dbInstance, {
          twitter: twitterVerified.id as any,
          twitterNick: twitterVerified?.name as any,
          adress: adx,
        });
        if (doc) {
          setHasSubmitted(true);
        }
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  };
  return adx ? (
    <>
      {/* <styles.WLContainer>
        <h3 style={{ color: "#fff" }}>
          Enter your the address you want whitelisted
        </h3>

        <styles.Input
          placeholder="Address"
          disabled={!discordVerified || !twitterVerified}
          value={adx}
          draggable={false}
          style={{ resize: "vertical" }}
          rows={4}
          onChange={(e) => setAdx(e.target.value)}
        />
        <CustomButton
          background="#53CF9B"
          label={"Join whitelist"}
          textColor={"#fff"}
          disabled={!discordVerified || !twitterVerified || adx?.length < 10}
          borderRadius={100}
          onClick={() => setModal(true)}
        />
      </styles.WLContainer> */}
      {open && (
        <styles.Modal>
          {!hasSubmitted ? (
            <styles.ModalContent>
              <div>
                <p>You are about to add:</p>
                <Spacer height={2} />

                <p style={{ textDecoration: "underline" }}>
                  {truncateString(adx)}
                </p>
              </div>
              <div>
                <p>Twitter id:</p>
                <Spacer height={2} />

                <p>{twitterVerified?.name}</p>
              </div>
              <p>to our whitelist, are you sure?</p>
              <p>You are only able to add one address per twitter account</p>
              <Spacer height={32} />
              <styles.ModalButtons>
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <>
                    <CustomButton
                      borderColor="#f4f4f4"
                      label={"Cancel"}
                      textColor={"#f4f4f4"}
                      borderRadius={100}
                      onClick={() => closeModal()}
                      disabled={loading}
                    />
                    <CustomButton
                      background="#575555"
                      label={"Join whitelist"}
                      textColor={"#f4f4f4"}
                      disabled={!adx || !twitterVerified || loading}
                      borderRadius={100}
                      onClick={() => addToWl()}
                    />
                  </>
                )}
              </styles.ModalButtons>
            </styles.ModalContent>
          ) : (
            <styles.ModalContent>
              <p>
                How Exciting ! Your address has been added to the whitelist!
              </p>
              <p>Thank you, see you soon!</p>
              <NextLink href={"/"}>
                <a href="/">
                  <CustomButton
                    background="#53CF9B"
                    label={"Home"}
                    textColor={"#fff"}
                    borderRadius={100}
                  />
                </a>
              </NextLink>
            </styles.ModalContent>
          )}
        </styles.Modal>
      )}
    </>
  ) : null;
};

export default WhiteListVerified;
