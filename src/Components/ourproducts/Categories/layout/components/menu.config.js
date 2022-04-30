import {
  HomeIcon,
} from '@heroicons/react/outline';

import{
  AiOutlineHome,
} from 'react-icons/ai';

import{
  BsSpeaker,
  BsTv,
  BsMic,
  BsCupFill,
} from 'react-icons/bs';

import{
  RiSurroundSoundFill,
  RiSoundModuleFill,
  RiSpeaker2Line,
  RiSpeakerLine,
  RiSpeaker3Line,
} from 'react-icons/ri';

import{
  BiBracket,
  BiHomeAlt,
} from 'react-icons/bi';

import{
  MdKitchen,
  MdOutdoorGrill,
  MdWaterDrop,
  MdCleaningServices,
  MdMiscellaneousServices
} from 'react-icons/md';

import{
  GiRiceCooker,
  GiCookingPot,
  GiPressureCooker,
  GiCookingGlove,
  GiWhisk,
  GiManualMeatGrinder,
  GiBlender,
  GiSpoon
} from 'react-icons/gi';

import{
  CgSmartHomeCooker
} from 'react-icons/cg';

import{
  WiHumidity
} from 'react-icons/wi';

import{
  IoWaterSharp
} from 'react-icons/io5';

import{
  FaFan
} from 'react-icons/fa';

export const sideMenu = [
  {
    label: "Home Entertainment",
    Icon: AiOutlineHome,
    to: "/ourproducts/homeE",
    children: [
      {
        label: "Portable Bluetooth Speaker",
        Icon: BsSpeaker,
        to: "homeEPBS",
      },
      {
        label: "Bluetooth Speaker",
        Icon: RiSpeaker2Line,
        to: "homeEBS",
      },
      {
        label: "Subwoofer Speaker",
        Icon: RiSpeakerLine,
        to: "homeESS",
      },
      {
        label: "Car Speaker",
        Icon: RiSpeaker3Line,
        to: "homeECS",
      },
      {
        label: "Soundbar",
        Icon: RiSurroundSoundFill,
        to: "homeES",
      },
      {
        label: "Television",
        Icon: BsTv,
        to: "homeET",
      },
      {
        label: "Wall Bracket",
        Icon: BiBracket,
        to: "homeEWB",
      },
      {
        label: "Microphone",
        Icon: BsMic,
        to: "homeEM",
      },
      {
        label: "Amplifier",
        Icon: RiSoundModuleFill,
        to: "homeEA",
      },
    ],
  },

  {
    label: "Kitchen Appliances",
    Icon: MdKitchen,
    to: "/ourproducts/kitchenA",
    children: [
      {
        label: "Rice Cooker",
        Icon: GiRiceCooker,
        to: "kitchenARC",
      },
      {
        label: "Electric Cooker",
        Icon: CgSmartHomeCooker,
        to: "kitchenAEC",
      },
      {
        label: "Electric Hotpot Cooker",
        Icon: GiCookingPot,
        to: "kitchenAEHC",
      },
      {
        label: "Induction",
        Icon: GiPressureCooker,
        to: "kitchenAI",
      },
      {
        label: "Oven",
        Icon: GiCookingPot,
        to: "kitchenAO",
      },
      {
        label: "Electric Kettle",
        Icon: GiCookingGlove,
        to: "kitchenAEK",
      },
      {
        label: "Mixer",
        Icon: GiWhisk,
        to: "kitchenAM",
      },
      {
        label: "Grinders",
        Icon: GiManualMeatGrinder,
        to: "kitchenAG",
      },
      {
        label: "Air Fryer",
        Icon: GiPressureCooker,
        to: "kitchenAAF",
      },
      // {
      //   label: "BBQ Grill",
      //   Icon: MdOutdoorGrill,
      //   to: "kitchenABG",
      // },
      // {
      //   label: "Dish Rack",
      //   Icon: GiSpoon,
      //   to: "kitchenADR",
      // },
      // {
      //   label: "Pitcher",
      //   Icon: BsCupFill,
      //   to: "kitchenAP",
      // },
      // {
      //   label: "Blender",
      //   Icon: GiBlender,
      //   to: "kitchenAB",
      // },
    ],
  },
  {
    label: "Home and Living",
    Icon: BiHomeAlt,
    to: "/ourproducts/homeL",
    children: [
      {
        label: "Humidifier",
        Icon: WiHumidity,
        to: "homeLH",
      },
      {
        label: "Dispenser",
        Icon: IoWaterSharp,
        to: "homeLD",
      },
      {
        label: "Purifier",
        Icon: MdWaterDrop,
        to: "homeLP",
      },
      {
        label: "Cleaning Tool",
        Icon: MdCleaningServices,
        to: "homeLCT",
      },
      {
        label: "Fans",
        Icon: FaFan,
        to: "homeLF",
      },
      {
        label: "Others",
        Icon: MdMiscellaneousServices,
        to: "homeLO",
      },
    ],
  },
];
