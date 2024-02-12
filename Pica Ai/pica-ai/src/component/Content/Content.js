import React from 'react'
import {SwapContent} from './SwapContent'
import {SwapProcessDescription} from "./SwapProcessDescription";
import { SwapBenefit } from './SwapBenefit';
import {SwapDescription} from './SwapDescription';
import {SwapFAQ} from "./SwapFAQ"
import {LastSection} from '../../layout/LastSection'

export default function Content() {
  return (
    <div>
      <SwapContent/>
      <SwapProcessDescription />
      <SwapBenefit/>
      <SwapDescription />
      <SwapFAQ />
      <LastSection/>
    </div>
  )
}
