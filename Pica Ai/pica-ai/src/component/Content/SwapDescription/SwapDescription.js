import React from 'react'
import describe1 from '../../../images/describe1.png';
import './SwapDescription.scss';
export default function SwapDescription() {
    return (
        <div className='wrapper-describe' style={{paddingRight:"40px", paddingLeft:"40px"}}>
            <div className='describe-innertab'>
                <div className='describe-left'>
                    <h2 className='describe-title' style={{textAlign:"left"}}>Ultra-Fast, Flawless Face Swaps</h2>
                    <div className='describe-content'>
                        <p> ever. Just upload two photos, hit Generate, and watch as the AI seamlessly swaps faces in seconds. No manual adjustments needed - get polished results in moments. Advanced algorithms ensure precise face matches, smooth transitions, and more. Want incredible face swaps in an instant? </p>
                    </div>
                    <div className='button' style={{marginTop:"20px"}}>Swap Face Now
                    </div>
                </div>
                <div className='describe-right'>
                    <img  className=" desrcibe-image" style={{maxWidth:"100%", display:"block", verticalAlign:"middle"}} src={describe1} alt=' '></img>
                </div>
            </div>
        </div>
    )
}
