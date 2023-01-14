import React, { useEffect, useState } from "react";
// import { useAddress, useMetamask, useContract } from "@thirdweb-dev/react";
// import Page from "../../blocks/Page";
// import Image from "next/image";
// import card from "./asset/card.png";
// import Header from "../../blocks/Header";
// import { useDynamicComponent } from "../../components/DynamicComponent";
// import { elements, TBlockElement } from "../../blocks";
// import CustomButton from "../../components/CustomButton";

// import styled from "styled-components";

const Mint = (props: any) => {
  return <div>comming soon</div>;
  //   const headerContent = useDynamicComponent<TBlockElement>(
  //     props.header,
  //     elements
  //   );
  //   const connectWithMetamask = useMetamask();
  //   const address = useAddress();
  //   const { contract, isLoading } = useContract(
  //     "0x068317BFa627D9C36d1662A03Efb37a9cC5Dbb6a",
  //     "nft-drop"
  //   );
  //   const [userOwned, setUserOwnder] = useState(0);
  //   const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  //   const [isClaiming, setIsClaiming] = useState(false);
  //   const [totalSupply, setTotalSupply] = useState(0);
  //   const [claimed, setClaimed] = useState(0);
  //   const [notClaimed, setNotClaimed] = useState(0);
  //   const [receipt, setReceipt] = useState<any>(null);

  //   const checkBalance = async () => {
  //     if (!address || !contract || isLoading) {
  //       return;
  //     }
  //     try {
  //       const balance = await contract.balanceOf(address);
  //       const totalSupply = await contract?.totalSupply();
  //       const totalClaimedSupply = await contract?.totalClaimedSupply();
  //       const totalUnclaimedSupply = await contract?.totalUnclaimedSupply();

  //       setClaimed(Number(totalClaimedSupply._hex));
  //       setTotalSupply(Number(totalSupply._hex));
  //       setNotClaimed(Number(totalUnclaimedSupply._hex));

  //       if (balance.gt(0)) {
  //         setHasClaimedNFT(true);
  //         setUserOwnder(Number(balance._hex));
  //         console.log("🎉 You have an NFT!", balance.gt(0), balance);
  //       } else {
  //         setHasClaimedNFT(false);
  //         console.log("🤷‍♂️ You don't have an NFT.");
  //       }
  //     } catch (error) {
  //       setHasClaimedNFT(false);
  //       console.error("Failed to get nft balance", error);
  //     }
  //   };
  //   useEffect(() => {
  //     if (!address || !contract) {
  //       return;
  //     }

  //     checkBalance();
  //   }, [address, contract]);

  //   const mintNft = async () => {
  //     setIsClaiming(true);

  //     if (!contract || !address) return;
  //     try {
  //       const tx = await contract.claimTo(address, 1);
  //       const receipt = tx[0].receipt; // the transaction receipt
  //       const claimedTokenId = tx[0].id; // the id of the NFT claimed
  //       const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
  //       setHasClaimedNFT(true);
  //       console.log(
  //         "🌊 Successfully Minted the NFT!",
  //         receipt,
  //         claimedTokenId,
  //         claimedNFT
  //       );
  //       const { blockHash, blockNumber, confirmations } = receipt;
  //       const { metadata } = claimedNFT;

  //       setReceipt({
  //         blockHash,
  //         blockNumber,
  //         confirmations,
  //         metadata: metadata,
  //       });
  //     } catch (error) {
  //       console.error("failed to claim", error);
  //     } finally {
  //       checkBalance();
  //       setIsClaiming(false);
  //     }
  //   };
  //   return (
  //     <Page
  //       background="#131418"
  //       maxWidth={1440}
  //       paddingVertical={128}
  //       header={props.header}
  //     >
  //       {headerContent}
  //       <>
  //         <div style={{ display: "flex", gap: "36px" }}>
  //           <StatsContainer>
  //             <StatsTitle>total NFTs</StatsTitle>
  //             <StatsValue>{totalSupply}</StatsValue>
  //           </StatsContainer>
  //           <StatsContainer>
  //             <StatsTitle>Claimed</StatsTitle>
  //             <StatsValue>{claimed}</StatsValue>
  //           </StatsContainer>
  //           <StatsContainer>
  //             <StatsTitle>NFTs left</StatsTitle>
  //             <StatsValue>{notClaimed}</StatsValue>
  //           </StatsContainer>
  //         </div>

  //         <MintContainer>
  //           <ImageContainer>
  //             <Image
  //               src={card}
  //               alt={"card"}
  //               layout="intrinsic"
  //               objectFit={"cover"}
  //               height={350}
  //               width={225}
  //             />
  //           </ImageContainer>
  //           <div></div>
  //           <RightCtn>
  //             {address && (
  //               <StatsContainer style={{ alignSelf: "flex-end" }}>
  //                 <StatsTitle> Owned By You</StatsTitle>

  //                 <StatsValue>{userOwned} NFTs</StatsValue>
  //               </StatsContainer>
  //             )}
  //             <ActionContainer>
  //               <Title>Mint</Title>

  //               {!receipt ? (
  //                 address ? (
  //                   <>
  //                     <p>
  //                       You are signed in as <br></br> {address}
  //                     </p>
  //                     <CustomButton
  //                       label={
  //                         isClaiming
  //                           ? "Minting Please follow instrucitons in MetaMask..."
  //                           : "Mint Now!"
  //                       }
  //                       background={"#302F2F"}
  //                       borderRadius={100}
  //                       textColor={"#94ecda"}
  //                       onClick={isClaiming ? () => {} : () => mintNft()}
  //                     />
  //                   </>
  //                 ) : (
  //                   <>
  //                     <p>sign in to start minting</p>
  //                     <CustomButton
  //                       label="Sign in using MetaMask"
  //                       background={"#302F2F"}
  //                       borderRadius={100}
  //                       textColor={"#fff"}
  //                       onClick={connectWithMetamask}
  //                     />
  //                   </>
  //                 )
  //               ) : (
  //                 <Receipt>
  //                   <h2>Success!</h2>
  //                   <p>
  //                     blockHash : <br />
  //                     {receipt?.blockHash}
  //                   </p>
  //                   <p>
  //                     blockNumber : <br />
  //                     {receipt?.blockNumber}
  //                   </p>
  //                   <p>confirmations : {receipt?.confirmations}</p>

  //                   <h3>NFT minted:</h3>
  //                   <p>{receipt?.metadata?.name}</p>
  //                   <p>{receipt?.metadata?.description}</p>
  //                   <p>{receipt?.metadata?.id}</p>
  //                 </Receipt>
  //               )}
  //             </ActionContainer>
  //           </RightCtn>
  //         </MintContainer>
  //       </>
  //     </Page>
  //   );
};

export default Mint;
// export const MintContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 84px;
//   justify-content: space-around;
// `;

// export const StatsContainer = styled.div`
//   background: #1e1f22;
//   box-shadow: 6px 6px 12px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 16px;
//   padding: 4px;
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 24px 36px;
//   color: white;
//   flex-direction: column;
//   gap: 16px;
// `;
// export const StatsTitle = styled.h4`
//   color: #94ecda;
// `;

// export const StatsValue = styled.h4`
//   color: white;
// `;

// export const RightCtn = styled.div`
//   flex: 50%;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const ActionContainer = styled.div`
//   min-height: 350px;
//   padding: 36px;
//   background: #1e1f22;
//   box-shadow: 6px 6px 12px 3px rgba(0, 0, 0, 0.1);
//   border-radius: 16px;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   color: #fff;
// `;

// export const Title = styled.h1`
//   color: #94ecda;
// `;

// export const MintButton = styled.div``;

// export const ImageContainer = styled.div`
//   flex: 50%;
//   gap: 20px;
//   display: grid;
//   place-content: center;
// `;

// export const Receipt = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
// `;
