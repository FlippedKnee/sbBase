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
};

const WhiteListVerified = ({
  discordVerified,
  twitterVerified,
}: TWLVerified) => {
  const [adx, setAdx] = useState("");
  const [modal, setModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dbInstance = collection(db, "wl");
  const addToWl = async () => {
    if (twitterVerified && discordVerified) {
      const doc = await addDoc(dbInstance, {
        discord: discordVerified,
        twitter: twitterVerified.id as any,
        adress: adx,
      });
      if (doc) {
        setHasSubmitted(true);
      }
    }
  };
  return !discordVerified && !twitterVerified ? (
    <>
      <styles.WLContainer>
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
      </styles.WLContainer>
      {modal && (
        <styles.Modal>
          {!hasSubmitted ? (
            <styles.ModalContent>
              <p>You are about to add:</p>

              <p style={{ textDecoration: "underline" }}>{adx}</p>
              <Spacer height={8} />
              <p>to our whitelist, are you sure?</p>
              <p>
                You are only able to add one address per discord/twitter account
              </p>
              <Spacer height={32} />
              <styles.ModalButtons>
                <CustomButton
                  background="#53CF9B"
                  label={"Cancel"}
                  textColor={"#fff"}
                  borderRadius={100}
                  onClick={() => setModal(false)}
                />
                <CustomButton
                  background="#53CF9B"
                  label={"Join whitelist"}
                  textColor={"#fff"}
                  disabled={!discordVerified || !twitterVerified}
                  borderRadius={100}
                  onClick={() => addToWl()}
                />
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
