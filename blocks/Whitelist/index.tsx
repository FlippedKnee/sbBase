import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { elements } from "..";
import CustomButton from "../../components/CustomButton";
import {
  Blok,
  BlokItem,
  useDynamicComponent,
} from "../../components/DynamicComponent";
import Button from "../Button";
import * as styles from "./Whitelist.styles";
import { useSession, signIn, signOut } from "next-auth/react";
import NextLink from "../../components/NextLink";
import { useCookies } from "react-cookie";

import Spacer from "../../components/Spacer";
import { CheckMark, DiscordSvg, TwitterSvg } from "../../components/Icons";
import WhiteListVerified from "./WhiteListVerified";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import {
  useAddress,
  useMetamask,
  useContract,
  useSigner,
} from "@thirdweb-dev/react";

type TWhiteList = BlokItem & {
  discordText?: string;
  twitterText?: string;
};

type TVerified = {
  id?: string;
  name?: string;
};

const message = "please sign this shit";

const WhiteList = ({ body, twitterText, discordText }: TWhiteList) => {
  const bodyContent = useDynamicComponent(body, elements);
  const signer = useSigner();
  const connectWithMetamask = useMetamask();

  const [discordVerified, setDiscordVerified] = useState<TVerified | null>(
    null
  );
  const [twitterVerified, setTwitterVerified] = useState<TVerified | null>(
    null
  );
  const [walletConnected, setWalletConnected] = useState(false);
  const [hasClickedTwitter, setHasClickedTwitter] = useState(false);

  const [error, setError] = useState<any>(null);
  const [discordParams, setDiscordParams] = useState<any>(null);
  const router = useRouter();
  const { data: session } = useSession();
  // const [dcCookie, setDcCookie, removeDcCookie] = useCookies<string, any>([
  //   "dcVerify",
  // ]);
  const [twCookie, setTwCookie, removeTwCookie] = useCookies<string, any>([
    "twVerify",
  ]);
  const [showWl, setShowWl] = useState(false);
  const [accountsHasBeenUsed, setAccountHasBeenUsed] =
    useState<TVerified | null>(null);
  const [adx, setAdx] = useState<string | null>(null);

  // useEffect(() => {
  //   if (window) {
  //     const fragment = new URLSearchParams(window?.location?.hash?.slice(1));
  //     const [accessToken, tokenType] = [
  //       fragment.get("access_token"),
  //       fragment.get("token_type"),
  //     ];
  //     if (accessToken) {
  //       setDiscordParams({
  //         accessToken,
  //         tokenType,
  //       });
  //     }
  //   }
  // }, [router?.pathname]);

  // const fetchDiscord = async () => {
  //   const res = await fetch("/api/oauth?q=" + discordParams?.accessToken, {
  //     method: "get",
  //   });
  //   // @ts-ignore
  //   if (res.status === 200) {
  //     const discordRes = await res.json();
  //     setDiscordVerified(discordRes?.data);
  //     setDcCookie(
  //       "dcVerify",
  //       JSON.stringify({
  //         id: discordRes?.data,
  //       })
  //     );
  //   } else {
  //     setDiscordVerified(null);
  //     setError("Could not get your account at this time, please try again");
  //   }
  // };
  const fetchTwitter = async () => {
    const res = await fetch("/api/twitter", {
      method: "get",
    });
    const twitterStatus = await res?.json();
    console.log("res", twitterStatus);
    if (res.status === 200) {
      // const twitterStatus = await res.json();
      if (twitterStatus?.data?.id) {
        setTwitterVerified(twitterStatus.data);
        setTwCookie(
          "twVerify",
          JSON.stringify({
            id: twitterStatus?.data?.id,
            name: twitterStatus?.data?.name,
          })
        );
      }
    } else {
      if (hasClickedTwitter) {
        setTwitterVerified(null);
        setError(
          "Could not get your twitter account at this time, please try again"
        );
      }
    }
  };

  // useEffect(() => {
  //   if (dcCookie?.dcVerify) {
  //     const { dcVerify } = dcCookie;
  //     setDiscordVerified(dcVerify);
  //     return;
  //   }
  //   // if (discordParams) {
  //   //   fetchDiscord();
  //   // }
  // }, [discordParams, dcCookie]);

  useEffect(() => {
    if (twCookie?.twVerify) {
      const { twVerify } = twCookie;
      setTwitterVerified(twVerify);
      return;
    }
    if (session) {
      fetchTwitter();
    }
    // @ts-ignore
  }, [session, twCookie]);

  const wlRef = collection(db, "wl");

  const checkIfAlreadyUsed = async () => {
    if (twitterVerified?.id) {
      // where("discord", "==", discordVerified),
      const qT = query(wlRef, where("twitter", "==", twitterVerified?.id));
      const querySnapshotTwitter = await getDocs(qT);
      if (querySnapshotTwitter?.docs?.length) {
        setAccountHasBeenUsed({
          id: "TWITTER",
          name: "Twitter account is already in use",
        });
        return;
      }
    }
    if (adx) {
      const qA = query(wlRef, where("adress", "==", adx));
      const querySnapshotAdx = await getDocs(qA);
      if (querySnapshotAdx?.docs?.length) {
        setAccountHasBeenUsed({ id: "ADX", name: "Address already in use" });
        return;
      }
    }
    if (adx && twitterVerified?.id && walletConnected) {
      setShowWl(true);
    }
  };

  useEffect(() => {
    if (twitterVerified?.id && adx) {
      checkIfAlreadyUsed();
    }
  }, [twitterVerified?.id]);
  return (
    <>
      <styles.WLContainer>
        {bodyContent}

        <styles.VerifyBox>
          <div>
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "#2a2525",
              }}
            >
              Follow these steps to join our whitelist
            </p>
            <Spacer height={16} />
            <styles.SocialButtonContainer>
              <CustomButton
                fullWidth
                fontSize={13}
                justify={"space-between"}
                height={47}
                background={"#2a2525"}
                borderColor={
                  twitterVerified?.id && accountsHasBeenUsed?.id !== "TWITTER"
                    ? "#25f5b0"
                    : "#2a2a2a"
                }
                label={"1. Connect Twitter"}
                textColor={
                  twitterVerified?.id && accountsHasBeenUsed?.id !== "TWITTER"
                    ? "#25f5b0"
                    : "#f4f4f4"
                }
                onClick={() => {
                  setHasClickedTwitter(true);
                  signIn("twitter");
                }}
                borderRadius={100}
                icon={
                  twitterVerified?.id &&
                  accountsHasBeenUsed?.id !== "TWITTER" ? (
                    <CheckMark color="#25f5b0" />
                  ) : (
                    <TwitterSvg />
                  )
                }
              />
            </styles.SocialButtonContainer>
            <Spacer height={16} />
            <styles.SocialButtonContainer>
              <CustomButton
                fullWidth
                fontSize={13}
                height={47}
                justify={"space-between"}
                background={"#2a2525"}
                borderColor={
                  walletConnected && accountsHasBeenUsed?.id !== "ADX"
                    ? "#25f5b0"
                    : "#575555"
                }
                label={"2. Connect wallet"}
                textColor={
                  walletConnected && accountsHasBeenUsed?.id !== "ADX"
                    ? "#25f5b0"
                    : "#f4f4f4"
                }
                onClick={async () => {
                  const metamask = await connectWithMetamask();
                  if (
                    !metamask.error ||
                    metamask?.error?.name === "ConnectorAlreadyConnectedError"
                  ) {
                    setWalletConnected(true);
                  }
                }}
                borderRadius={100}
                icon={
                  walletConnected && accountsHasBeenUsed?.id !== "ADX" ? (
                    <CheckMark color="#25f5b0" />
                  ) : null
                }
              />
            </styles.SocialButtonContainer>
            <Spacer height={16} />
            <styles.SocialButtonContainer>
              <CustomButton
                fullWidth
                fontSize={13}
                height={47}
                justify={"space-between"}
                background={"#2a2525"}
                borderColor={
                  adx && accountsHasBeenUsed?.id !== "ADX"
                    ? "#25f5b0"
                    : "#2a2525"
                }
                label={"3. Sign wallet"}
                textColor={
                  adx && accountsHasBeenUsed?.id !== "ADX"
                    ? "#25f5b0"
                    : "#f4f4f4"
                }
                onClick={async () => {
                  if (signer) {
                    try {
                      const signAdx = await signer.signMessage(message);
                      if (signAdx) {
                        const retrievedAdx = await signer.getAddress();
                        setAdx(retrievedAdx);
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }
                }}
                borderRadius={100}
                icon={
                  adx && accountsHasBeenUsed?.id !== "ADX" ? (
                    <CheckMark color="#25f5b0" />
                  ) : null
                }
              />
            </styles.SocialButtonContainer>
          </div>
          {accountsHasBeenUsed && (
            <span style={{ color: "#a90c0c" }}>
              {accountsHasBeenUsed?.name}
            </span>
          )}
          {error && (
            <div style={{ color: "#a90c0c", fontSize: "13px" }}>{error}</div>
          )}
          <styles.ButtonContainer>
            <CustomButton
              fullWidth
              background={"#2a2525"}
              label={"Sign up for whitelist"}
              textColor={"#f4f4f4"}
              onClick={async () => {
                checkIfAlreadyUsed();
              }}
              borderRadius={100}
              disabled={!adx || (!twitterVerified && !error)}
            />
          </styles.ButtonContainer>
        </styles.VerifyBox>
      </styles.WLContainer>
      {showWl && (
        <WhiteListVerified
          adx={adx}
          twitterVerified={twitterVerified}
          open={showWl}
          closeModal={() => setShowWl(false)}
        />
      )}
    </>
  );
};

export default WhiteList;
