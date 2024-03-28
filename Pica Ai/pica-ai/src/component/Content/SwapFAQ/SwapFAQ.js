import React from 'react';
import './SwapFAQ.scss';

export default function SwapFAQ() {
    return (
        <div className='wrapper-faq'>
            <div className='swap-faq-content'>
                <div className='swap-faq-title'>
                    <h2 className='swap-faq-title'> Face Swapping FAQs </h2>
                </div>
                <div className='swap-faq-box'>
                    <div className="accordion accordian-flush">
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ cursor: "Pointer", paddingRight: "24px" }}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>Can I face swap online for free?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Yes, Pica AI offers a certain number of free face swaps every day through our online face swapper. You can access basic face swapping capabilities without having to pay.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ cursor: "Pointer", paddingRight: "24px" }}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Does Pica AI have a face swap app?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div >
                                    Yes, Pica AI has an iOS app available for Apple users. The app provides higher image quality, faster generation speeds, and access to more face swapping styles compared to the web version.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='accordion'>
                        <div className="accordion-item">
                            <h2 className="accordion-header" style={{ cursor: "Pointer", paddingRight: "24px" }}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <strong> Can I face swap videos with Pica AI?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Not currently, but video face swapping is coming soon! The Pica AI team is working hard to make our powerful face swapping available for videos as well as static images. Video face swapping will be added in a future update.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
