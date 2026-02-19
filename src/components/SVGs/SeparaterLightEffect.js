import React from 'react'

export const SeparaterLightEffect = ({ direction }) => {
    return (
        direction === "vertical" ? (
            <svg width="10" height="96" viewBox="0 0 10 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_73_65)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="4" y="4" width="2" height="88" fill="#3B82F6" />
                </g>
                <g filter="url(#filter1_f_73_65)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="4" y="4" width="2" height="88" fill="#3B82F6" />
                </g>
                <g filter="url(#filter2_f_73_65)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="4" y="4" width="2" height="88" fill="#3B82F6" />
                </g>
                <g filter="url(#filter3_f_73_65)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="4" y="4" width="2" height="88" fill="#3B82F6" />
                </g>
                <defs>
                    <filter id="filter0_f_73_65" x="0" y="0" width="10" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_73_65" />
                    </filter>
                    <filter id="filter1_f_73_65" x="0" y="0" width="10" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_73_65" />
                    </filter>
                    <filter id="filter2_f_73_65" x="0" y="0" width="10" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_73_65" />
                    </filter>
                    <filter id="filter3_f_73_65" x="0" y="0" width="10" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_73_65" />
                    </filter>
                </defs>
            </svg>

        ) :
            (
                <svg width="208" height="10" viewBox="0 0 208 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                        <rect x="4" y="4" width="200" height="2" fill="#3B82F6" />
                    </g>
                    <g filter="url(#filter1_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                        <rect x="4" y="4" width="200" height="2" fill="#3B82F6" />
                    </g>
                    <g filter="url(#filter2_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                        <rect x="4" y="4" width="200" height="2" fill="#3B82F6" />
                    </g>
                    <g filter="url(#filter3_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                        <rect x="4" y="4" width="200" height="2" fill="#3B82F6" />
                    </g>
                    <defs>
                        <filter id="filter0_f_0_1" x="0" y="0" width="208" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
                        </filter>
                        <filter id="filter1_f_0_1" x="0" y="0" width="208" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
                        </filter>
                        <filter id="filter2_f_0_1" x="0" y="0" width="208" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
                        </filter>
                        <filter id="filter3_f_0_1" x="0" y="0" width="208" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1" />
                        </filter>
                    </defs>
                </svg>


            )
    )
}
