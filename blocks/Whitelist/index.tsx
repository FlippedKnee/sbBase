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

type TWhiteList = BlokItem & {
  discordText?: string;
  twitterText?: string;
};

type TVerified = {
  id?: string;
  name?: string;
};

const WhiteList = ({ body, twitterText, discordText }: TWhiteList) => {
  const bodyContent = useDynamicComponent(body, elements);

  const [discordVerified, setDiscordVerified] = useState<TVerified | null>(
    null
  );
  const [twitterVerified, setTwitterVerified] = useState<TVerified | null>(
    null
  );
  const [hasClickedTwitter, setHasClickedTwitter] = useState(false);

  const [error, setError] = useState<any>(null);
  const [discordParams, setDiscordParams] = useState<any>(null);
  const router = useRouter();
  const { data: session } = useSession();
  const [dcCookie, setDcCookie, removeDcCookie] = useCookies<string, any>([
    "dcVerify",
  ]);
  const [twCookie, setTwCookie, removeTwCookie] = useCookies<string, any>([
    "twVerify",
  ]);
  const [showWl, setShowWl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accountsHasBeenUsed, setAccountHasBeenUsed] = useState(false);

  useEffect(() => {
    if (window) {
      const fragment = new URLSearchParams(window?.location?.hash?.slice(1));
      const [accessToken, tokenType] = [
        fragment.get("access_token"),
        fragment.get("token_type"),
      ];
      if (accessToken) {
        setDiscordParams({
          accessToken,
          tokenType,
        });
      }
    }
  }, [router?.pathname]);

  const fetchDiscord = async () => {
    const res = await fetch("/api/oauth?q=" + discordParams?.accessToken, {
      method: "get",
    });
    // @ts-ignore
    if (res.status === 200) {
      const discordRes = await res.json();
      setDiscordVerified(discordRes?.data);
      setDcCookie(
        "dcVerify",
        JSON.stringify({
          id: discordRes?.data,
        })
      );
    } else {
      setDiscordVerified(null);
      setError("Could not get your account at this time, please try again");
    }
  };
  const fetchTwitter = async () => {
    const res = await fetch("/api/twitter", {
      method: "get",
    });

    if (res.status === 200) {
      const twitterStatus = await res.json();
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

  useEffect(() => {
    if (dcCookie?.dcVerify) {
      const { dcVerify } = dcCookie;
      setDiscordVerified(dcVerify);
      return;
    }
    if (discordParams) {
      fetchDiscord();
    }
  }, [discordParams, dcCookie]);

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
    let userFound = 0;
    if (twitterVerified?.id && discordVerified) {
      const q = query(
        wlRef,
        where("discord", "==", discordVerified),
        where("twitter", "==", twitterVerified?.id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        userFound++;
      });
    }
    if (userFound) {
      setAccountHasBeenUsed(true);
    } else {
      setShowWl(true);
    }
  };

  return (
    <>
      <styles.WLContainer>
        {bodyContent}

        <styles.VerifyBox>
          <styles.VerifyType color={"#fff"}>
            <span>{discordVerified && <CheckMark color={"green"} />}</span>
            <p style={{ fontSize: "13px" }}>{discordText}</p>
          </styles.VerifyType>
          <Spacer height={12} />
          <styles.SocialButtonContainer>
            <NextLink
              href={
                "https://discord.com/api/oauth2/authorize?client_id=1067545708321845269&redirect_uri=https%3A%2F%2Fsb-base.vercel.app%2Fen%2Fwhitelist&response_type=token&scope=guilds.join%20identify%20guilds.members.read"
              }
              // for localhost test
              // href={
              //   "https://discord.com/api/oauth2/authorize?client_id=1038877253012050023&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fwhitelist&response_type=token&scope=guilds%20guilds.join%20identify"
              // }
            >
              <a
                href={
                  "https://discord.com/api/oauth2/authorize?client_id=1067545708321845269&redirect_uri=https%3A%2F%2Fsb-base.vercel.app%2Fen%2Fwhitelist&response_type=token&scope=guilds.join%20identify%20guilds.members.read"
                }
                // for localhost test
                // href={
                //   "https://discord.com/api/oauth2/authorize?client_id=1038877253012050023&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fwhitelist&response_type=token&scope=guilds%20guilds.join%20identify"
                // }
              >
                <CustomButton
                  background="#5865F2"
                  label={"Discord"}
                  textColor={"#fff"}
                  borderRadius={100}
                  onClick={() => setError(null)}
                  icon={<DiscordSvg />}
                />
              </a>
            </NextLink>
          </styles.SocialButtonContainer>
          <Spacer height={32} />
          <styles.VerifyType color={"#fff"}>
            <span>{twitterVerified && <CheckMark color={"green"} />}</span>
            {twitterText}
          </styles.VerifyType>
          <Spacer height={8} />
          <styles.SocialButtonContainer>
            <CustomButton
              background="#55ACEE"
              label={"Twitter"}
              textColor={"#fff"}
              onClick={() => {
                setHasClickedTwitter(true);
                signIn("twitter");
              }}
              borderRadius={100}
              icon={<TwitterSvg />}
            />
          </styles.SocialButtonContainer>
        </styles.VerifyBox>

        <CustomButton
          background="#53CF9B"
          label={"Continue"}
          textColor={"#fff"}
          disabled={!discordVerified || !twitterVerified}
          borderRadius={100}
          onClick={() => checkIfAlreadyUsed()}
        />
        {accountsHasBeenUsed && (
          <span style={{ color: "red" }}>
            Accounts is already used, please try different ones
          </span>
        )}
        {error && (
          <div style={{ color: "#fa7e7e", fontSize: "13px" }}>{error}</div>
        )}
      </styles.WLContainer>
      {showWl && (
        <WhiteListVerified
          discordVerified={discordVerified}
          twitterVerified={twitterVerified}
        />
      )}
    </>
  );
};

export default WhiteList;
