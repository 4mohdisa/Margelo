import Image from "next/image";
import React from "react";
import SliderContainer, { SliderItem } from "./Slider";

type Props = {};

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/audubon.png"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/coinbase.png"
            width={150}
            height={50}
            alt="Coinbase"
            objectFit="contain"
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/exodus.png"
            width={150}
            height={50}
            alt="Exodus"
            objectFit="contain"
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/expensify.png"
            width={150}
            height={50}
            alt="Expensify"
            objectFit="contain"
          />
        </SliderItem>{" "}
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/extra.png"
            width={150}
            height={50}
            alt="Extra"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/litentry.png"
            width={150}
            height={50}
            alt="Litentry"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/nativescript.png"
            width={150}
            height={50}
            alt="Native Script"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/picnic.png"
            width={150}
            height={50}
            alt="Picnic"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/pinkpanda.png"
            width={150}
            height={50}
            alt="Pink Panda"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/rainbow.png"
            width={150}
            height={50}
            alt="Rain Bow"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/scribeware.png"
            width={150}
            height={50}
            alt="Scribeware"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/shopify.png"
            width={150}
            height={50}
            alt="Shopify"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/showtime.png"
            width={150}
            height={50}
            alt="Showtime"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/slingshot.png"
            width={150}
            height={50}
            alt="slingshot"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/snapcalorie.png"
            width={150}
            height={50}
            alt="snapcalorie"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/status.png"
            width={150}
            height={50}
            alt="status"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/steakwallet.png"
            width={150}
            height={50}
            alt="Steakwallet"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/steddy.png"
            width={150}
            height={50}
            alt="Steddy"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/stori.png"
            width={150}
            height={50}
            alt="Stori"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/tocsen.png"
            width={150}
            height={50}
            alt="Tocsen"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/walletconnect.png"
            width={150}
            height={50}
            alt="Wallet Connect"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;
